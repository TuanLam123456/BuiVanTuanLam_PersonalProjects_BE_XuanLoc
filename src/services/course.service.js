import { prisma } from "../common/prisma/connect.prisma.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";
import { createSlug } from "./../common/helpers/slug.helper.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import fs from "fs";
import path from "path";

export const courseService = {
  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const courses = await prisma.courses.findMany({
      where: {
        ...where,

        status: "ACTIVE",
      },

      include: {
        course_categories: true,
      },

      skip: index,

      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.courses.count({
      where: {
        ...where,

        status: "ACTIVE",
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      items: courses,

      totalItems,

      totalPages,

      page,

      pageSize,
    };
  },

  async findOne(req) {
    const { id } = req.params;

    const course = await prisma.courses.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        // danh mục khóa học
        course_categories: true,

        // giáo viên của khóa học
        teacher_courses: {
          include: {
            teachers: true,
          },
        },

        // lịch khai giảng
        opening_schedules: true,
      },
    });

    return course;
  },

  async create(req) {
    const body = req.body;

    let slug = createSlug(body.title);

    const existCourse = await prisma.courses.findUnique({
      where: {
        slug,
      },
    });

    if (existCourse) {
      slug = `${slug}-${Date.now()}`;
    }

    const course = await prisma.courses.create({
      data: {
        category_id: Number(body.category_id),

        title: body.title,

        slug,

        description: body.description,

        image: req.file.filename,

        status: "ACTIVE",
      },
    });

    return course;
  },

  async update(req) {
    const { id } = req.params;

    const body = req.body;

    const oldCourse = await prisma.courses.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!oldCourse) {
      throw new BadRequestError("Khóa học không tồn tại");
    }

    let image = oldCourse.image;

    // nếu upload ảnh mới
    if (req.file) {
      image = req.file.filename;

      // xóa ảnh cũ
      if (oldCourse.image) {
        const oldPath = path.join("public/images", oldCourse.image);

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
    }

    let slug = oldCourse.slug;

    // nếu đổi title thì đổi slug
    if (body.title) {
      slug = createSlug(body.title);
    }

    const course = await prisma.courses.update({
      where: {
        id: Number(id),
      },

      data: {
        category_id: body.category_id ? Number(body.category_id) : undefined,

        title: body.title,

        slug,

        description: body.description,

        short_description: body.short_description,

        target_students: body.target_students,

        study_method: body.study_method,

        featured: body.featured ? body.featured === "true" : undefined,

        image,
      },
    });

    return course;
  },

  async delete(req) {
    const { id } = req.params;

    const course = await prisma.courses.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!course) {
      throw new BadRequestError("Khóa học không tồn tại");
    }

    // xóa ảnh nếu có
    if (course.image) {
      const imagePath = path.join("public/images", course.image);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    const result = await prisma.courses.delete({
      where: {
        id: Number(id),
      },
    });

    return result;
  },
};
