import { prisma } from "../common/prisma/connect.prisma.js";

export const courseCategoryService = {
  async findAll(req) {
    const categories = await prisma.course_categories.findMany({
      where: {
        status: "ACTIVE",
      },

      orderBy: {
        id: "asc",
      },
    });

    return categories;
  },
};
