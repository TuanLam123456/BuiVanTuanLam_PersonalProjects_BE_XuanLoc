import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";

export const teacherCourseService = {
  async findAll(req) {
    const data = await prisma.teacher_courses.findMany({
      include: {
        teachers: {
          include: {
            users: true,
          },
        },

        courses: true,
      },

      orderBy: {
        id: "desc",
      },
    });

    return data;
  },

  async create(req) {
    const { teacher_id, course_id, role } = req.body;

    const teacher = await prisma.teachers.findUnique({
      where: {
        id: Number(teacher_id),
      },

      include: {
        users: true,
      },
    });

    if (!teacher) {
      throw new BadRequestError("Giáo viên không tồn tại");
    }

    const course = await prisma.courses.findUnique({
      where: {
        id: Number(course_id),
      },
    });

    if (!course) {
      throw new BadRequestError("Khóa học không tồn tại");
    }

    const exist = await prisma.teacher_courses.findFirst({
      where: {
        teacher_id: Number(teacher_id),

        course_id: Number(course_id),
      },
    });

    if (exist) {
      throw new BadRequestError("Giáo viên đã được gán khóa học này");
    }

    const teacherCourse = await prisma.teacher_courses.create({
      data: {
        teacher_id: Number(teacher_id),

        course_id: Number(course_id),

        role: role || "MAIN_TEACHER",
      },

      include: {
        teachers: {
          include: {
            users: true,
          },
        },

        courses: true,
      },
    });

    return teacherCourse;
  },

  async delete(req) {
    const { id } = req.params;

    const teacherCourse = await prisma.teacher_courses.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!teacherCourse) {
      throw new BadRequestError("Không tìm thấy phân công");
    }

    await prisma.teacher_courses.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  },
};
