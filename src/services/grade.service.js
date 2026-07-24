import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

const gradeInclude = {
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

      classes: {
        include: {
          courses: {
            select: {
              id: true,
              title: true,
              slug: true,
            },
          },
        },
      },
    },
  },

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
};

export const gradeService = {
  async create(req) {
    const body = req.body;

    const enrollmentId = Number(body.enrollment_id);

    const teacherId = Number(body.teacher_id);

    const enrollment = await prisma.enrollments.findUnique({
      where: {
        id: enrollmentId,
      },
    });

    if (!enrollment) {
      throw new BadRequestError("Thông tin ghi danh không tồn tại");
    }

    const teacher = await prisma.teachers.findUnique({
      where: {
        id: teacherId,
      },
    });

    if (!teacher) {
      throw new BadRequestError("Giáo viên không tồn tại");
    }

    if (!body.name?.trim()) {
      throw new BadRequestError("Tên điểm không được để trống");
    }

    const score = Number(body.score);

    const maxScore = body.max_score !== undefined ? Number(body.max_score) : 10;

    if (Number.isNaN(score) || score < 0) {
      throw new BadRequestError("Điểm số không hợp lệ");
    }

    if (Number.isNaN(maxScore) || maxScore <= 0) {
      throw new BadRequestError("Điểm tối đa không hợp lệ");
    }

    if (score > maxScore) {
      throw new BadRequestError("Điểm đạt không được lớn hơn điểm tối đa");
    }

    const grade = await prisma.grades.create({
      data: {
        enrollment_id: enrollmentId,

        teacher_id: teacherId,

        name: body.name.trim(),

        score,

        max_score: maxScore,

        note: body.note || null,
      },

      include: gradeInclude,
    });

    return grade;
  },

  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const grades = await prisma.grades.findMany({
      where,

      include: gradeInclude,

      skip: index,

      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.grades.count({
      where,
    });

    return {
      items: grades,

      totalItems,

      totalPages: Math.ceil(totalItems / pageSize),

      page,

      pageSize,
    };
  },

  async findOne(req) {
    const id = Number(req.params.id);

    const grade = await prisma.grades.findUnique({
      where: {
        id,
      },

      include: gradeInclude,
    });

    if (!grade) {
      throw new BadRequestError("Không tìm thấy điểm");
    }

    return grade;
  },

  async update(req) {
    const id = Number(req.params.id);

    const body = req.body;

    const old = await prisma.grades.findUnique({
      where: {
        id,
      },
    });

    if (!old) {
      throw new BadRequestError("Không tìm thấy điểm");
    }

    const score =
      body.score !== undefined ? Number(body.score) : Number(old.score);

    const maxScore =
      body.max_score !== undefined
        ? Number(body.max_score)
        : Number(old.max_score);

    if (Number.isNaN(score) || score < 0) {
      throw new BadRequestError("Điểm số không hợp lệ");
    }

    if (Number.isNaN(maxScore) || maxScore <= 0) {
      throw new BadRequestError("Điểm tối đa không hợp lệ");
    }

    if (score > maxScore) {
      throw new BadRequestError("Điểm đạt không được lớn hơn điểm tối đa");
    }

    let teacherId = old.teacher_id;

    if (body.teacher_id !== undefined) {
      teacherId = Number(body.teacher_id);

      const teacher = await prisma.teachers.findUnique({
        where: {
          id: teacherId,
        },
      });

      if (!teacher) {
        throw new BadRequestError("Giáo viên không tồn tại");
      }
    }

    const grade = await prisma.grades.update({
      where: {
        id,
      },

      data: {
        teacher_id: teacherId,

        name: body.name ? body.name.trim() : old.name,

        score,

        max_score: maxScore,

        note: body.note !== undefined ? body.note || null : old.note,
      },

      include: gradeInclude,
    });

    return grade;
  },

  async delete(req) {
    const id = Number(req.params.id);

    const grade = await prisma.grades.findUnique({
      where: {
        id,
      },
    });

    if (!grade) {
      throw new BadRequestError("Không tìm thấy điểm");
    }

    await prisma.grades.delete({
      where: {
        id,
      },
    });

    return true;
  },
};
