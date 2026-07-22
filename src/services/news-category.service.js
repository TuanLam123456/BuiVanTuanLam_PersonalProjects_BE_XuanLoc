import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";
import { createSlug } from "../common/helpers/slug.helper.js";

export const newsCategoryService = {
  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const categories = await prisma.news_categories.findMany({
      where: {
        ...where,

        status: "ACTIVE",
      },

      include: {
        _count: {
          select: {
            news: true,
          },
        },
      },

      skip: index,

      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.news_categories.count({
      where: {
        ...where,

        status: "ACTIVE",
      },
    });

    return {
      items: categories,

      totalItems,

      totalPages: Math.ceil(totalItems / pageSize),

      page,

      pageSize,
    };
  },

  async findOne(req) {
    const { slug } = req.params;

    const category = await prisma.news_categories.findUnique({
      where: {
        slug,
      },

      include: {
        news: {
          where: {
            status: "PUBLISHED",
          },

          orderBy: {
            created_at: "desc",
          },
        },
      },
    });

    if (!category) {
      throw new BadRequestError("Không tìm thấy danh mục");
    }

    return category;
  },

  async create(req) {
    const { name, description, status } = req.body;

    const slug = createSlug(name);

    const exist = await prisma.news_categories.findUnique({
      where: {
        slug,
      },
    });

    if (exist) {
      throw new BadRequestError("Danh mục đã tồn tại");
    }

    const category = await prisma.news_categories.create({
      data: {
        name,

        slug,

        description,

        status: status || "ACTIVE",
      },
    });

    return category;
  },

  async update(req) {
    const { id } = req.params;

    const { name, description, status } = req.body;

    const category = await prisma.news_categories.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!category) {
      throw new BadRequestError("Không tìm thấy danh mục");
    }

    let slug = category.slug;

    // Nếu đổi tên thì tạo slug mới
    if (name && name !== category.name) {
      slug = createSlug(name);

      const exist = await prisma.news_categories.findUnique({
        where: {
          slug,
        },
      });

      // bỏ qua chính record đang update
      if (exist && exist.id !== category.id) {
        throw new BadRequestError("Slug đã tồn tại");
      }
    }

    const result = await prisma.news_categories.update({
      where: {
        id: Number(id),
      },

      data: {
        name: name ?? category.name,

        slug,

        description: description ?? category.description,

        status: status ?? category.status,
      },
    });

    return result;
  },

  async delete(req) {
    const { id } = req.params;

    const category = await prisma.news_categories.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        _count: {
          select: {
            news: true,
          },
        },
      },
    });

    if (!category) {
      throw new BadRequestError("Không tìm thấy danh mục");
    }

    if (category._count.news > 0) {
      throw new BadRequestError("Danh mục đang có bài viết, không thể xóa");
    }

    await prisma.news_categories.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  },
};
