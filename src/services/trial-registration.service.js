import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";
export const trialRegistrationService = {
  async create(req) {
    const body = req.body;

    // nếu chọn khóa học thì kiểm tra tồn tại
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

    const registration = await prisma.trial_registrations.create({
      data: {
        user_id: req.user ? req.user.id : null,

        course_id: body.course_id ? Number(body.course_id) : null,

        full_name: body.full_name,

        phone: body.phone,

        email: body.email,

        age: body.age ? Number(body.age) : null,

        current_level: body.current_level,

        preferred_time: body.preferred_time,

        note: body.note,

        trial_date: body.trial_date ? new Date(body.trial_date) : null,

        status: "NEW",
      },

      include: {
        courses: true,
      },
    });

    return registration;
  },

  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const registrations = await prisma.trial_registrations.findMany({
      where,

      include: {
        courses: true,

        users: {
          select: {
            id: true,
            full_name: true,
            email: true,
            phone: true,
          },
        },
      },

      skip: index,

      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.trial_registrations.count({
      where,
    });

    return {
      items: registrations,

      totalItems,

      totalPages: Math.ceil(totalItems / pageSize),

      page,

      pageSize,
    };
  },

  async findOne(req) {
    const { id } = req.params;

    const registration = await prisma.trial_registrations.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        courses: true,

        users: true,
      },
    });

    if (!registration) {
      throw new BadRequestError("Không tìm thấy đăng ký học thử");
    }

    return registration;
  },

  async update(req) {
    const { id } = req.params;

    const body = req.body;

    const registration = await prisma.trial_registrations.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!registration) {
      throw new BadRequestError("Không tìm thấy đăng ký");
    }

    const result = await prisma.trial_registrations.update({
      where: {
        id: Number(id),
      },

      data: {
        status: body.status ?? registration.status,

        note: body.note ?? registration.note,

        trial_date: body.trial_date
          ? new Date(body.trial_date)
          : registration.trial_date,
      },
    });

    return result;
  },

  async delete(req) {
    const { id } = req.params;

    const registration = await prisma.trial_registrations.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!registration) {
      throw new BadRequestError("Không tìm thấy đăng ký");
    }

    await prisma.trial_registrations.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  },
};
