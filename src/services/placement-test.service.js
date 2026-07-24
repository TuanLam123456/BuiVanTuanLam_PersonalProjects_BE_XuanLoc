import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

const STATUS = ["SCHEDULED", "COMPLETED", "CONSULTED", "CANCELLED"];

const includeData = {
  courses: {
    select: {
      id: true,
      title: true,
      slug: true,
      image: true,
      level: true,
      duration: true,
      status: true,
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

  users_placement_tests_evaluator_idTousers: {
    select: {
      id: true,
      full_name: true,
      email: true,
      phone: true,
      avatar: true,
    },
  },

  users: {
    select: {
      id: true,
      full_name: true,
      email: true,
      phone: true,
      avatar: true,
    },
  },
};

export const placementTestService = {
  async create(req) {
    const body = req.body;

    // User đăng ký test (nếu có)
    if (body.user_id) {
      const user = await prisma.users.findUnique({
        where: {
          id: Number(body.user_id),
        },
      });

      if (!user) {
        throw new BadRequestError("User không tồn tại");
      }
    }

    // Khóa học đề xuất
    if (body.recommended_course_id) {
      const course = await prisma.courses.findUnique({
        where: {
          id: Number(body.recommended_course_id),
        },
      });

      if (!course) {
        throw new BadRequestError("Khóa học đề xuất không tồn tại");
      }
    }

    // Giáo viên đánh giá
    if (body.evaluator_teacher_id) {
      const teacher = await prisma.teachers.findUnique({
        where: {
          id: Number(body.evaluator_teacher_id),
        },
      });

      if (!teacher) {
        throw new BadRequestError("Giáo viên đánh giá không tồn tại");
      }
    }

    // Người đánh giá khác
    if (body.evaluator_id) {
      const evaluator = await prisma.users.findUnique({
        where: {
          id: Number(body.evaluator_id),
        },
      });

      if (!evaluator) {
        throw new BadRequestError("Người đánh giá không tồn tại");
      }
    }

    const status = body.status || "SCHEDULED";

    if (!STATUS.includes(status)) {
      throw new BadRequestError("Trạng thái không hợp lệ");
    }

    if (
      status === "COMPLETED" &&
      (body.score === undefined || !body.level_result)
    ) {
      throw new BadRequestError(
        "Hoàn thành test cần có điểm và kết quả trình độ",
      );
    }

    const placementTest = await prisma.placement_tests.create({
      data: {
        user_id: body.user_id ? Number(body.user_id) : null,

        recommended_course_id: body.recommended_course_id
          ? Number(body.recommended_course_id)
          : null,

        evaluator_teacher_id: body.evaluator_teacher_id
          ? Number(body.evaluator_teacher_id)
          : null,

        evaluator_id: body.evaluator_id ? Number(body.evaluator_id) : null,

        full_name: body.full_name,

        email: body.email || null,

        phone: body.phone || null,

        test_date: body.test_date ? new Date(body.test_date) : null,

        score: body.score !== undefined ? Number(body.score) : null,

        level_result: body.level_result || null,

        recommendation: body.recommendation || null,

        note: body.note || null,

        status,
      },

      include: includeData,
    });

    return placementTest;
  },

  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const items = await prisma.placement_tests.findMany({
      where,

      include: includeData,

      skip: index,

      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.placement_tests.count({
      where,
    });

    return {
      items,

      totalItems,

      totalPages: Math.ceil(totalItems / pageSize),

      page,

      pageSize,
    };
  },

  async findOne(req) {
    const id = Number(req.params.id);

    const placementTest = await prisma.placement_tests.findUnique({
      where: {
        id,
      },

      include: includeData,
    });

    if (!placementTest) {
      throw new BadRequestError("Không tìm thấy bài test");
    }

    return placementTest;
  },

  async update(req) {
    const id = Number(req.params.id);

    const body = req.body;

    const old = await prisma.placement_tests.findUnique({
      where: {
        id,
      },
    });

    if (!old) {
      throw new BadRequestError("Không tìm thấy bài test");
    }

    const status = body.status ?? old.status;

    if (!STATUS.includes(status)) {
      throw new BadRequestError("Trạng thái không hợp lệ");
    }

    const score = body.score !== undefined ? Number(body.score) : old.score;

    const level = body.level_result ?? old.level_result;

    if (status === "COMPLETED" && (!score || !level)) {
      throw new BadRequestError(
        "Hoàn thành test cần có điểm và kết quả trình độ",
      );
    }

    const updated = await prisma.placement_tests.update({
      where: {
        id,
      },

      data: {
        user_id:
          body.user_id !== undefined ? Number(body.user_id) : old.user_id,

        recommended_course_id:
          body.recommended_course_id !== undefined
            ? Number(body.recommended_course_id)
            : old.recommended_course_id,

        evaluator_teacher_id:
          body.evaluator_teacher_id !== undefined
            ? Number(body.evaluator_teacher_id)
            : old.evaluator_teacher_id,

        evaluator_id:
          body.evaluator_id !== undefined
            ? Number(body.evaluator_id)
            : old.evaluator_id,

        full_name: body.full_name ?? old.full_name,

        email: body.email ?? old.email,

        phone: body.phone ?? old.phone,

        test_date: body.test_date ? new Date(body.test_date) : old.test_date,

        score,

        level_result: level,

        recommendation: body.recommendation ?? old.recommendation,

        note: body.note ?? old.note,

        status,
      },

      include: includeData,
    });

    return updated;
  },

  async delete(req) {
    const id = Number(req.params.id);

    const placementTest = await prisma.placement_tests.findUnique({
      where: {
        id,
      },
    });

    if (!placementTest) {
      throw new BadRequestError("Không tìm thấy bài test");
    }

    await prisma.placement_tests.delete({
      where: {
        id,
      },
    });

    return true;
  },
};
