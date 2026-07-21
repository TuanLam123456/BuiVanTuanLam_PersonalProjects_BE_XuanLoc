import { prisma } from "../common/prisma/connect.prisma.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

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
};
