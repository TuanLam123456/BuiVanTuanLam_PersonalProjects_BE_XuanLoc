import { prisma } from "../common/prisma/connect.prisma.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";
import { createSlug } from "./../common/helpers/slug.helper.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";

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
};
