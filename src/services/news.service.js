import { prisma } from "../common/prisma/connect.prisma.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import fs from "fs";
import path from "path";
import { createSlug } from "../common/helpers/slug.helper.js";
export const newsService = {
  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const news = await prisma.news.findMany({
      where: {
        ...where,

        status: "PUBLISHED",
      },

      include: {
        news_categories: true,

        users: {
          select: {
            id: true,

            full_name: true,

            avatar: true,
          },
        },
      },

      skip: index,

      take: pageSize,

      orderBy: {
        created_at: "desc",
      },
    });

    const totalItems = await prisma.news.count({
      where: {
        ...where,

        status: "PUBLISHED",
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      items: news,

      totalItems,

      totalPages,

      page,

      pageSize,
    };
  },

  async findOne(req) {
    const { slug } = req.params;

    const news = await prisma.news.findUnique({
      where: {
        slug,
      },

      include: {
        news_categories: true,

        users: {
          select: {
            id: true,

            full_name: true,

            avatar: true,
          },
        },
      },
    });

    if (!news) {
      throw new BadRequestError("Không tìm thấy bài viết");
    }

    // tăng lượt xem
    await prisma.news.update({
      where: {
        id: news.id,
      },

      data: {
        view_count: {
          increment: 1,
        },
      },
    });

    return news;
  },

  async create(req) {
    const body = req.body;

    try {
      const slug = createSlug(body.title);

      const existSlug = await prisma.news.findUnique({
        where: {
          slug,
        },
      });

      if (existSlug) {
        throw new BadRequestError("Slug đã tồn tại");
      }

      const news = await prisma.news.create({
        data: {
          category_id: Number(body.category_id),

          author_id: req.user.id,

          title: body.title,

          slug,

          short_description: body.short_description,

          content: body.content,

          image: req.file ? req.file.filename : null,

          status: body.status || "DRAFT",

          published_at: body.status === "PUBLISHED" ? new Date() : null,
        },

        include: {
          news_categories: true,

          users: true,
        },
      });

      return news;
    } catch (error) {
      if (req.file) {
        const filePath = path.join("public/images", req.file.filename);

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      throw error;
    }
  },

  async update(req) {
    const { id } = req.params;

    const body = req.body;

    try {
      const news = await prisma.news.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!news) {
        throw new BadRequestError("Không tìm thấy bài viết");
      }

      const oldImage = news.image;

      let slug = news.slug;

      // nếu đổi title thì tạo slug mới
      if (body.title && body.title !== news.title) {
        slug = createSlug(body.title);

        const existSlug = await prisma.news.findUnique({
          where: {
            slug,
          },
        });

        if (existSlug && existSlug.id !== news.id) {
          throw new BadRequestError("Slug đã tồn tại");
        }
      }

      const newsUpdate = await prisma.news.update({
        where: {
          id: Number(id),
        },

        data: {
          category_id: body.category_id
            ? Number(body.category_id)
            : news.category_id,

          title: body.title || news.title,

          slug,

          short_description: body.short_description ?? news.short_description,

          content: body.content || news.content,

          image: req.file ? req.file.filename : news.image,

          status: body.status || news.status,

          published_at:
            body.status === "PUBLISHED" ? new Date() : news.published_at,
        },

        include: {
          news_categories: true,

          users: true,
        },
      });

      // thành công -> xóa ảnh cũ
      if (req.file && oldImage) {
        const oldPath = path.join("public/images", oldImage);

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      return newsUpdate;
    } catch (error) {
      // lỗi -> xóa ảnh mới
      if (req.file) {
        const newPath = path.join("public/images", req.file.filename);

        if (fs.existsSync(newPath)) {
          fs.unlinkSync(newPath);
        }
      }

      throw error;
    }
  },

  async delete(req) {
    const { id } = req.params;

    const news = await prisma.news.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!news) {
      throw new BadRequestError("Không tìm thấy bài viết");
    }

    // xóa ảnh
    if (news.image) {
      const filePath = path.join("public/images", news.image);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await prisma.news.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  },
};
