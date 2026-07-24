import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

export const tuitionPlanService = {
  async create(req) {
    const body = req.body;

    const courseId = Number(body.course_id);
    const price = Number(body.price);

    const course = await prisma.courses.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      throw new BadRequestError("Khóa học không tồn tại");
    }

    if (!body.name?.trim()) {
      throw new BadRequestError("Tên gói học phí không được để trống");
    }

    if (body.price === undefined || body.price === null || body.price === "") {
      throw new BadRequestError("Giá gói học phí không được để trống");
    }

    if (Number.isNaN(price) || price < 0) {
      throw new BadRequestError("Giá gói học phí không hợp lệ");
    }

    let originalPrice = null;

    if (
      body.original_price !== undefined &&
      body.original_price !== null &&
      body.original_price !== ""
    ) {
      originalPrice = Number(body.original_price);

      if (Number.isNaN(originalPrice) || originalPrice < 0) {
        throw new BadRequestError("Giá gốc không hợp lệ");
      }

      if (originalPrice < price) {
        throw new BadRequestError("Giá gốc phải lớn hơn hoặc bằng giá bán");
      }
    }

    const isDiscount = body.is_discount === true || body.is_discount === "true";

    const discountPercent =
      body.discount_percent !== undefined &&
      body.discount_percent !== null &&
      body.discount_percent !== ""
        ? Number(body.discount_percent)
        : 0;

    if (
      Number.isNaN(discountPercent) ||
      discountPercent < 0 ||
      discountPercent > 100
    ) {
      throw new BadRequestError("Phần trăm giảm giá phải từ 0 đến 100");
    }

    if (isDiscount && !originalPrice) {
      throw new BadRequestError("Gói giảm giá phải có giá gốc");
    }

    const tuitionPlan = await prisma.tuition_plans.create({
      data: {
        course_id: courseId,

        name: body.name.trim(),

        price,

        original_price: originalPrice,

        duration: body.duration || null,

        description: body.description || null,

        benefits: body.benefits || null,

        is_discount: isDiscount,

        discount_percent: isDiscount ? discountPercent : 0,

        status: body.status || "ACTIVE",
      },

      include: {
        courses: true,
      },
    });

    return tuitionPlan;
  },

  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const tuitionPlans = await prisma.tuition_plans.findMany({
      where,

      include: {
        courses: {
          select: {
            id: true,
            title: true,
            slug: true,
            image: true,
            duration: true,
            study_method: true,
            status: true,
          },
        },
      },

      skip: index,
      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.tuition_plans.count({
      where,
    });

    return {
      items: tuitionPlans,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      page,
      pageSize,
    };
  },

  async findOne(req) {
    const { id } = req.params;

    const tuitionPlan = await prisma.tuition_plans.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        courses: {
          include: {
            course_categories: true,
          },
        },
      },
    });

    if (!tuitionPlan) {
      throw new BadRequestError("Không tìm thấy gói học phí");
    }

    return tuitionPlan;
  },

  async update(req) {
    const { id } = req.params;
    const body = req.body;

    const tuitionPlan = await prisma.tuition_plans.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!tuitionPlan) {
      throw new BadRequestError("Không tìm thấy gói học phí");
    }

    let courseId = tuitionPlan.course_id;

    if (body.course_id !== undefined) {
      courseId = Number(body.course_id);

      const course = await prisma.courses.findUnique({
        where: {
          id: courseId,
        },
      });

      if (!course) {
        throw new BadRequestError("Khóa học không tồn tại");
      }
    }

    const price =
      body.price !== undefined ? Number(body.price) : Number(tuitionPlan.price);

    if (Number.isNaN(price) || price < 0) {
      throw new BadRequestError("Giá gói học phí không hợp lệ");
    }

    let originalPrice =
      tuitionPlan.original_price !== null
        ? Number(tuitionPlan.original_price)
        : null;

    if (body.original_price !== undefined) {
      originalPrice =
        body.original_price !== null && body.original_price !== ""
          ? Number(body.original_price)
          : null;

      if (
        originalPrice !== null &&
        (Number.isNaN(originalPrice) || originalPrice < 0)
      ) {
        throw new BadRequestError("Giá gốc không hợp lệ");
      }
    }

    if (originalPrice !== null && originalPrice < price) {
      throw new BadRequestError("Giá gốc phải lớn hơn hoặc bằng giá bán");
    }

    const isDiscount =
      body.is_discount !== undefined
        ? body.is_discount === true || body.is_discount === "true"
        : tuitionPlan.is_discount;

    const discountPercent =
      body.discount_percent !== undefined
        ? body.discount_percent !== null && body.discount_percent !== ""
          ? Number(body.discount_percent)
          : 0
        : (tuitionPlan.discount_percent ?? 0);

    if (
      Number.isNaN(discountPercent) ||
      discountPercent < 0 ||
      discountPercent > 100
    ) {
      throw new BadRequestError("Phần trăm giảm giá phải từ 0 đến 100");
    }

    if (isDiscount && !originalPrice) {
      throw new BadRequestError("Gói giảm giá phải có giá gốc");
    }

    const updatedTuitionPlan = await prisma.tuition_plans.update({
      where: {
        id: Number(id),
      },

      data: {
        course_id: courseId,

        name: body.name !== undefined ? body.name.trim() : tuitionPlan.name,

        price,

        original_price: originalPrice,

        duration:
          body.duration !== undefined
            ? body.duration || null
            : tuitionPlan.duration,

        description:
          body.description !== undefined
            ? body.description || null
            : tuitionPlan.description,

        benefits:
          body.benefits !== undefined
            ? body.benefits || null
            : tuitionPlan.benefits,

        is_discount: isDiscount,

        discount_percent: isDiscount ? discountPercent : 0,

        status: body.status ?? tuitionPlan.status,
      },

      include: {
        courses: true,
      },
    });

    return updatedTuitionPlan;
  },

  async delete(req) {
    const { id } = req.params;

    const tuitionPlan = await prisma.tuition_plans.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!tuitionPlan) {
      throw new BadRequestError("Không tìm thấy gói học phí");
    }

    await prisma.tuition_plans.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  },
};
