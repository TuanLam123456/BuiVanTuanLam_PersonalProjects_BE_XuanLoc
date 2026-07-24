import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

export const enrollmentService = {
  async create(req) {
    const body = req.body;

    const classId = Number(body.class_id);
    const studentId = Number(body.student_id);

    const classData = await prisma.classes.findUnique({
      where: {
        id: classId,
      },

      include: {
        _count: {
          select: {
            enrollments: {
              where: {
                status: {
                  in: ["PENDING", "ACTIVE"],
                },
              },
            },
          },
        },
      },
    });

    if (!classData) {
      throw new BadRequestError("Lớp học không tồn tại");
    }

    const student = await prisma.users.findUnique({
      where: {
        id: studentId,
      },
    });

    if (!student) {
      throw new BadRequestError("Học viên không tồn tại");
    }

    if (student.status !== "ACTIVE") {
      throw new BadRequestError("Tài khoản học viên không hoạt động");
    }

    const existedEnrollment = await prisma.enrollments.findUnique({
      where: {
        class_id_student_id: {
          class_id: classId,
          student_id: studentId,
        },
      },
    });

    if (existedEnrollment) {
      throw new BadRequestError("Học viên đã được ghi danh vào lớp này");
    }

    if (
      classData.max_students &&
      classData._count.enrollments >= classData.max_students
    ) {
      throw new BadRequestError("Lớp học đã đủ sĩ số");
    }

    if (["FINISHED", "CANCELLED"].includes(classData.status)) {
      throw new BadRequestError(
        "Không thể ghi danh vào lớp đã kết thúc hoặc bị hủy",
      );
    }

    const enrollment = await prisma.enrollments.create({
      data: {
        class_id: classId,

        student_id: studentId,

        enrollment_date: body.enrollment_date
          ? new Date(body.enrollment_date)
          : undefined,

        status: body.status || "PENDING",

        final_score:
          body.final_score !== undefined && body.final_score !== null
            ? Number(body.final_score)
            : null,

        note: body.note || null,
      },

      include: {
        classes: {
          include: {
            courses: true,

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
        },

        users: {
          select: {
            id: true,
            full_name: true,
            email: true,
            phone: true,
            avatar: true,
            status: true,
          },
        },
      },
    });

    return enrollment;
  },

  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const enrollments = await prisma.enrollments.findMany({
      where,

      include: {
        classes: {
          include: {
            courses: true,

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
        },

        users: {
          select: {
            id: true,
            full_name: true,
            email: true,
            phone: true,
            avatar: true,
            status: true,
          },
        },

        _count: {
          select: {
            attendance: true,
            grades: true,
            payments: true,
          },
        },
      },

      skip: index,
      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.enrollments.count({
      where,
    });

    return {
      items: enrollments,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      page,
      pageSize,
    };
  },

  async findOne(req) {
    const { id } = req.params;

    const enrollment = await prisma.enrollments.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        classes: {
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
        },

        users: {
          select: {
            id: true,
            full_name: true,
            email: true,
            phone: true,
            avatar: true,
            date_of_birth: true,
            gender: true,
            address: true,
            status: true,
          },
        },

        attendance: {
          orderBy: {
            id: "desc",
          },
        },

        grades: {
          include: {
            teachers: {
              include: {
                users: {
                  select: {
                    id: true,
                    full_name: true,
                  },
                },
              },
            },
          },

          orderBy: {
            id: "desc",
          },
        },

        payments: {
          orderBy: {
            id: "desc",
          },
        },
      },
    });

    if (!enrollment) {
      throw new BadRequestError("Không tìm thấy thông tin ghi danh");
    }

    return enrollment;
  },

  async update(req) {
    const { id } = req.params;
    const body = req.body;

    const enrollment = await prisma.enrollments.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!enrollment) {
      throw new BadRequestError("Không tìm thấy thông tin ghi danh");
    }

    let classId = enrollment.class_id;
    let studentId = enrollment.student_id;

    if (body.class_id !== undefined) {
      classId = Number(body.class_id);

      const classData = await prisma.classes.findUnique({
        where: {
          id: classId,
        },

        include: {
          _count: {
            select: {
              enrollments: {
                where: {
                  status: {
                    in: ["PENDING", "ACTIVE"],
                  },

                  id: {
                    not: enrollment.id,
                  },
                },
              },
            },
          },
        },
      });

      if (!classData) {
        throw new BadRequestError("Lớp học không tồn tại");
      }

      if (
        classData.max_students &&
        classData._count.enrollments >= classData.max_students
      ) {
        throw new BadRequestError("Lớp học đã đủ sĩ số");
      }

      if (["FINISHED", "CANCELLED"].includes(classData.status)) {
        throw new BadRequestError(
          "Không thể chuyển học viên vào lớp đã kết thúc hoặc bị hủy",
        );
      }
    }

    if (body.student_id !== undefined) {
      studentId = Number(body.student_id);

      const student = await prisma.users.findUnique({
        where: {
          id: studentId,
        },
      });

      if (!student) {
        throw new BadRequestError("Học viên không tồn tại");
      }

      if (student.status !== "ACTIVE") {
        throw new BadRequestError("Tài khoản học viên không hoạt động");
      }
    }

    if (
      classId !== enrollment.class_id ||
      studentId !== enrollment.student_id
    ) {
      const duplicatedEnrollment = await prisma.enrollments.findFirst({
        where: {
          class_id: classId,
          student_id: studentId,

          id: {
            not: enrollment.id,
          },
        },
      });

      if (duplicatedEnrollment) {
        throw new BadRequestError("Học viên đã được ghi danh vào lớp này");
      }
    }

    if (body.final_score !== undefined && body.final_score !== null) {
      const finalScore = Number(body.final_score);

      if (Number.isNaN(finalScore) || finalScore < 0 || finalScore > 10) {
        throw new BadRequestError(
          "Điểm tổng kết phải nằm trong khoảng từ 0 đến 10",
        );
      }
    }

    const updatedEnrollment = await prisma.enrollments.update({
      where: {
        id: Number(id),
      },

      data: {
        class_id: classId,

        student_id: studentId,

        enrollment_date:
          body.enrollment_date !== undefined
            ? body.enrollment_date
              ? new Date(body.enrollment_date)
              : null
            : enrollment.enrollment_date,

        status: body.status ?? enrollment.status,

        final_score:
          body.final_score !== undefined
            ? body.final_score !== null && body.final_score !== ""
              ? Number(body.final_score)
              : null
            : enrollment.final_score,

        note: body.note !== undefined ? body.note || null : enrollment.note,
      },

      include: {
        classes: {
          include: {
            courses: true,

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
        },

        users: {
          select: {
            id: true,
            full_name: true,
            email: true,
            phone: true,
            avatar: true,
            status: true,
          },
        },
      },
    });

    return updatedEnrollment;
  },

  async delete(req) {
    const { id } = req.params;

    const enrollment = await prisma.enrollments.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        _count: {
          select: {
            attendance: true,
            grades: true,
            payments: true,
          },
        },
      },
    });

    if (!enrollment) {
      throw new BadRequestError("Không tìm thấy thông tin ghi danh");
    }

    if (enrollment._count.payments > 0) {
      throw new BadRequestError("Không thể xóa ghi danh đã có thanh toán");
    }

    if (enrollment._count.grades > 0) {
      throw new BadRequestError("Không thể xóa ghi danh đã có điểm");
    }

    if (enrollment._count.attendance > 0) {
      throw new BadRequestError(
        "Không thể xóa ghi danh đã có dữ liệu điểm danh",
      );
    }

    await prisma.enrollments.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  },
};
