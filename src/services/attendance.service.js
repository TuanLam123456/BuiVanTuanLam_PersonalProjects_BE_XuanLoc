import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

const STATUS = ["PRESENT", "ABSENT", "LATE", "EXCUSED"];

const attendanceInclude = {
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
};

export const attendanceService = {
  async create(req) {
    const body = req.body;

    const enrollmentId = Number(body.enrollment_id);

    const classId = Number(body.class_id);

    const enrollment = await prisma.enrollments.findUnique({
      where: {
        id: enrollmentId,
      },
    });

    if (!enrollment) {
      throw new BadRequestError("Thông tin ghi danh không tồn tại");
    }

    if (enrollment.class_id !== classId) {
      throw new BadRequestError("Học viên không thuộc lớp này");
    }

    const classData = await prisma.classes.findUnique({
      where: {
        id: classId,
      },
    });

    if (!classData) {
      throw new BadRequestError("Lớp học không tồn tại");
    }

    if (!body.attendance_date) {
      throw new BadRequestError("Ngày điểm danh không được để trống");
    }

    const attendanceDate = new Date(body.attendance_date);

    if (Number.isNaN(attendanceDate.getTime())) {
      throw new BadRequestError("Ngày điểm danh không hợp lệ");
    }

    const status = body.status || "PRESENT";

    if (!STATUS.includes(status)) {
      throw new BadRequestError("Trạng thái điểm danh không hợp lệ");
    }

    const existed = await prisma.attendance.findUnique({
      where: {
        enrollment_id_attendance_date: {
          enrollment_id: enrollmentId,

          attendance_date: attendanceDate,
        },
      },
    });

    if (existed) {
      throw new BadRequestError("Học viên đã được điểm danh trong ngày này");
    }

    const attendance = await prisma.attendance.create({
      data: {
        enrollment_id: enrollmentId,

        class_id: classId,

        attendance_date: attendanceDate,

        status,

        note: body.note || null,
      },

      include: attendanceInclude,
    });

    return attendance;
  },

  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const attendances = await prisma.attendance.findMany({
      where,

      include: attendanceInclude,

      skip: index,

      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.attendance.count({
      where,
    });

    return {
      items: attendances,

      totalItems,

      totalPages: Math.ceil(totalItems / pageSize),

      page,

      pageSize,
    };
  },

  async findOne(req) {
    const id = Number(req.params.id);

    const attendance = await prisma.attendance.findUnique({
      where: {
        id,
      },

      include: attendanceInclude,
    });

    if (!attendance) {
      throw new BadRequestError("Không tìm thấy dữ liệu điểm danh");
    }

    return attendance;
  },

  async update(req) {
    const id = Number(req.params.id);

    const body = req.body;

    const old = await prisma.attendance.findUnique({
      where: {
        id,
      },
    });

    if (!old) {
      throw new BadRequestError("Không tìm thấy dữ liệu điểm danh");
    }

    const status = body.status ?? old.status;

    if (!STATUS.includes(status)) {
      throw new BadRequestError("Trạng thái điểm danh không hợp lệ");
    }

    let attendanceDate = old.attendance_date;

    if (body.attendance_date) {
      attendanceDate = new Date(body.attendance_date);

      if (Number.isNaN(attendanceDate.getTime())) {
        throw new BadRequestError("Ngày điểm danh không hợp lệ");
      }
    }

    const attendance = await prisma.attendance.update({
      where: {
        id,
      },

      data: {
        attendance_date: attendanceDate,

        status,

        note: body.note !== undefined ? body.note || null : old.note,
      },

      include: attendanceInclude,
    });

    return attendance;
  },

  async delete(req) {
    const id = Number(req.params.id);

    const attendance = await prisma.attendance.findUnique({
      where: {
        id,
      },
    });

    if (!attendance) {
      throw new BadRequestError("Không tìm thấy dữ liệu điểm danh");
    }

    await prisma.attendance.delete({
      where: {
        id,
      },
    });

    return true;
  },
};
