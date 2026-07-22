import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

export const openingScheduleService = {
  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const schedules = await prisma.opening_schedules.findMany({
      where: {
        ...where,
      },

      include: {
        courses: true,

        teachers: {
          include: {
            users: {
              select: {
                id: true,
                full_name: true,
                avatar: true,
              },
            },
          },
        },
      },

      skip: index,

      take: pageSize,

      orderBy: {
        start_date: "asc",
      },
    });

    const totalItems = await prisma.opening_schedules.count({
      where,
    });

    return {
      items: schedules,

      totalItems,

      totalPages: Math.ceil(totalItems / pageSize),

      page,

      pageSize,
    };
  },

  async findOne(req) {
    const { id } = req.params;

    const schedule = await prisma.opening_schedules.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        courses: true,

        teachers: {
          include: {
            users: {
              select: {
                id: true,
                full_name: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    if (!schedule) {
      throw new BadRequestError("Không tìm thấy lịch khai giảng");
    }

    return schedule;
  },

  async create(req) {
    const body = req.body;

    const course = await prisma.courses.findUnique({
      where: {
        id: Number(body.course_id),
      },
    });

    if (!course) {
      throw new BadRequestError("Khóa học không tồn tại");
    }

    if (body.teacher_id) {
      const teacher = await prisma.teachers.findUnique({
        where: {
          id: Number(body.teacher_id),
        },
      });

      if (!teacher) {
        throw new BadRequestError("Giáo viên không tồn tại");
      }
    }

    const schedule = await prisma.opening_schedules.create({
      data: {
        course_id: Number(body.course_id),

        teacher_id: body.teacher_id ? Number(body.teacher_id) : null,

        start_date: new Date(body.start_date),

        end_date: body.end_date ? new Date(body.end_date) : null,

        study_time: body.study_time,

        study_method: body.study_method || "OFFLINE",

        room: body.room,

        max_students: body.max_students ? Number(body.max_students) : 20,

        current_students: 0,

        tuition: body.tuition ? Number(body.tuition) : null,

        status: body.status || "OPEN",
      },

      include: {
        courses: true,

        teachers: true,
      },
    });

    return schedule;
  },

  async update(req) {
    const { id } = req.params;

    const body = req.body;

    const schedule = await prisma.opening_schedules.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!schedule) {
      throw new BadRequestError("Không tìm thấy lịch khai giảng");
    }

    if (body.course_id) {
      const course = await prisma.courses.findUnique({
        where: {
          id: Number(body.course_id),
        },
      });

      if (!course) {
        throw new BadRequestError("Khóa học không tồn tại");
      }
    }

    const result = await prisma.opening_schedules.update({
      where: {
        id: Number(id),
      },

      data: {
        course_id: body.course_id ? Number(body.course_id) : schedule.course_id,

        teacher_id:
          body.teacher_id !== undefined
            ? Number(body.teacher_id)
            : schedule.teacher_id,

        start_date: body.start_date
          ? new Date(body.start_date)
          : schedule.start_date,

        end_date: body.end_date ? new Date(body.end_date) : schedule.end_date,

        study_time: body.study_time ?? schedule.study_time,

        study_method: body.study_method ?? schedule.study_method,

        room: body.room ?? schedule.room,

        max_students: body.max_students
          ? Number(body.max_students)
          : schedule.max_students,

        tuition: body.tuition ? Number(body.tuition) : schedule.tuition,

        status: body.status ?? schedule.status,
      },
    });

    return result;
  },

  async delete(req) {
    const { id } = req.params;

    const schedule = await prisma.opening_schedules.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!schedule) {
      throw new BadRequestError("Không tìm thấy lịch khai giảng");
    }

    await prisma.opening_schedules.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  },
};
