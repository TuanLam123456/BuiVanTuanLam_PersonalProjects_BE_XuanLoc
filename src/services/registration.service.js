import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

export const registrationService = {
  async create(req) {
    const body = req.body;

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

    const registration = await prisma.registrations.create({
      data: {
        user_id: req.user ? req.user.id : null,

        course_id: body.course_id ? Number(body.course_id) : null,

        full_name: body.full_name,

        phone: body.phone,

        email: body.email,

        message: body.message,

        source: body.source || "CONTACT_PAGE",

        status: "NEW",

        note: null,
      },

      include: {
        courses: true,
      },
    });

    return registration;
  },

  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const registrations = await prisma.registrations.findMany({
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

    const totalItems = await prisma.registrations.count({
      where,
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      items: registrations,
      totalItems,
      totalPages,
      page,
      pageSize,
    };
  },

  async findOne(req) {
    const { id } = req.params;

    const registration = await prisma.registrations.findUnique({
      where: {
        id: Number(id),
      },

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
    });

    if (!registration) {
      throw new BadRequestError("Không tìm thấy đăng ký");
    }

    return registration;
  },

  async update(req) {
    const { id } = req.params;
    const body = req.body;

    const registration = await prisma.registrations.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!registration) {
      throw new BadRequestError("Không tìm thấy đăng ký");
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

    const result = await prisma.registrations.update({
      where: {
        id: Number(id),
      },

      data: {
        course_id:
          body.course_id !== undefined
            ? body.course_id
              ? Number(body.course_id)
              : null
            : registration.course_id,

        full_name: body.full_name ?? registration.full_name,

        phone: body.phone ?? registration.phone,

        email: body.email ?? registration.email,

        message: body.message ?? registration.message,

        source: body.source ?? registration.source,

        status: body.status ?? registration.status,

        note: body.note ?? registration.note,
      },

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
    });

    return result;
  },

  async delete(req) {
    const { id } = req.params;

    const registration = await prisma.registrations.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!registration) {
      throw new BadRequestError("Không tìm thấy đăng ký");
    }

    await prisma.registrations.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  },
};
