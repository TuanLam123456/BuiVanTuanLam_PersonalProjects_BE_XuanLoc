import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

export const classService = {
  async create(req) {
    const body = req.body;

    const courseId = Number(body.course_id);

    const course = await prisma.courses.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      throw new BadRequestError("Khóa học không tồn tại");
    }

    if (body.schedule_id) {
      const schedule = await prisma.opening_schedules.findUnique({
        where: {
          id: Number(body.schedule_id),
        },
      });

      if (!schedule) {
        throw new BadRequestError("Lịch khai giảng không tồn tại");
      }

      if (schedule.course_id !== courseId) {
        throw new BadRequestError(
          "Lịch khai giảng không thuộc khóa học đã chọn",
        );
      }
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

    const existedClassCode = await prisma.classes.findUnique({
      where: {
        class_code: body.class_code,
      },
    });

    if (existedClassCode) {
      throw new BadRequestError("Mã lớp đã tồn tại");
    }

    if (body.end_date && new Date(body.end_date) < new Date(body.start_date)) {
      throw new BadRequestError(
        "Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu",
      );
    }

    const createdClass = await prisma.classes.create({
      data: {
        course_id: courseId,

        schedule_id: body.schedule_id ? Number(body.schedule_id) : null,

        teacher_id: body.teacher_id ? Number(body.teacher_id) : null,

        class_code: body.class_code,

        name: body.name,

        start_date: new Date(body.start_date),

        end_date: body.end_date ? new Date(body.end_date) : null,

        study_time: body.study_time || null,

        room: body.room || null,

        max_students:
          body.max_students !== undefined ? Number(body.max_students) : 20,

        status: body.status || "PLANNING",
      },

      include: {
        courses: true,
        opening_schedules: true,

        teachers: {
          include: {
            users: {
              select: {
                id: true,
                full_name: true,
                email: true,
                phone: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    return createdClass;
  },

  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const classes = await prisma.classes.findMany({
      where,

      include: {
        courses: true,
        opening_schedules: true,

        teachers: {
          include: {
            users: {
              select: {
                id: true,
                full_name: true,
                email: true,
                phone: true,
                avatar: true,
              },
            },
          },
        },

        _count: {
          select: {
            enrollments: true,
          },
        },
      },

      skip: index,
      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.classes.count({
      where,
    });

    return {
      items: classes,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      page,
      pageSize,
    };
  },

  async findOne(req) {
    const { id } = req.params;

    const classData = await prisma.classes.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        courses: true,
        opening_schedules: true,

        teachers: {
          include: {
            users: {
              select: {
                id: true,
                full_name: true,
                email: true,
                phone: true,
                avatar: true,
              },
            },
          },
        },

        enrollments: {
          include: {
            users: {
              select: {
                id: true,
                full_name: true,
                email: true,
                phone: true,
                avatar: true,
              },
            },
          },

          orderBy: {
            id: "desc",
          },
        },

        _count: {
          select: {
            enrollments: true,
          },
        },
      },
    });

    if (!classData) {
      throw new BadRequestError("Không tìm thấy lớp học");
    }

    return classData;
  },

  async update(req) {
    const { id } = req.params;
    const body = req.body;

    const classData = await prisma.classes.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!classData) {
      throw new BadRequestError("Không tìm thấy lớp học");
    }

    const courseId =
      body.course_id !== undefined
        ? Number(body.course_id)
        : classData.course_id;

    if (body.course_id !== undefined) {
      const course = await prisma.courses.findUnique({
        where: {
          id: courseId,
        },
      });

      if (!course) {
        throw new BadRequestError("Khóa học không tồn tại");
      }
    }

    let scheduleId = classData.schedule_id;

    if (body.schedule_id !== undefined) {
      scheduleId = body.schedule_id ? Number(body.schedule_id) : null;

      if (scheduleId) {
        const schedule = await prisma.opening_schedules.findUnique({
          where: {
            id: scheduleId,
          },
        });

        if (!schedule) {
          throw new BadRequestError("Lịch khai giảng không tồn tại");
        }

        if (schedule.course_id !== courseId) {
          throw new BadRequestError(
            "Lịch khai giảng không thuộc khóa học đã chọn",
          );
        }
      }
    } else if (scheduleId) {
      const schedule = await prisma.opening_schedules.findUnique({
        where: {
          id: scheduleId,
        },
      });

      if (schedule && schedule.course_id !== courseId) {
        throw new BadRequestError(
          "Lịch khai giảng hiện tại không thuộc khóa học mới",
        );
      }
    }

    let teacherId = classData.teacher_id;

    if (body.teacher_id !== undefined) {
      teacherId = body.teacher_id ? Number(body.teacher_id) : null;

      if (teacherId) {
        const teacher = await prisma.teachers.findUnique({
          where: {
            id: teacherId,
          },
        });

        if (!teacher) {
          throw new BadRequestError("Giáo viên không tồn tại");
        }
      }
    }

    if (body.class_code && body.class_code !== classData.class_code) {
      const existedClassCode = await prisma.classes.findUnique({
        where: {
          class_code: body.class_code,
        },
      });

      if (existedClassCode) {
        throw new BadRequestError("Mã lớp đã tồn tại");
      }
    }

    const startDate = body.start_date
      ? new Date(body.start_date)
      : classData.start_date;

    const endDate =
      body.end_date !== undefined
        ? body.end_date
          ? new Date(body.end_date)
          : null
        : classData.end_date;

    if (endDate && endDate < startDate) {
      throw new BadRequestError(
        "Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu",
      );
    }

    const updatedClass = await prisma.classes.update({
      where: {
        id: Number(id),
      },

      data: {
        course_id: courseId,
        schedule_id: scheduleId,
        teacher_id: teacherId,

        class_code: body.class_code ?? classData.class_code,

        name: body.name ?? classData.name,

        start_date: startDate,
        end_date: endDate,

        study_time:
          body.study_time !== undefined
            ? body.study_time || null
            : classData.study_time,

        room: body.room !== undefined ? body.room || null : classData.room,

        max_students:
          body.max_students !== undefined
            ? Number(body.max_students)
            : classData.max_students,

        status: body.status ?? classData.status,
      },

      include: {
        courses: true,
        opening_schedules: true,

        teachers: {
          include: {
            users: {
              select: {
                id: true,
                full_name: true,
                email: true,
                phone: true,
                avatar: true,
              },
            },
          },
        },

        _count: {
          select: {
            enrollments: true,
          },
        },
      },
    });

    return updatedClass;
  },

  async delete(req) {
    const { id } = req.params;

    const classData = await prisma.classes.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        _count: {
          select: {
            enrollments: true,
            assignments: true,
            attendance: true,
          },
        },
      },
    });

    if (!classData) {
      throw new BadRequestError("Không tìm thấy lớp học");
    }

    if (classData._count.enrollments > 0) {
      throw new BadRequestError("Không thể xóa lớp học đã có học viên");
    }

    if (classData._count.assignments > 0) {
      throw new BadRequestError("Không thể xóa lớp học đã có bài tập");
    }

    if (classData._count.attendance > 0) {
      throw new BadRequestError(
        "Không thể xóa lớp học đã có dữ liệu điểm danh",
      );
    }

    await prisma.classes.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  },
};
