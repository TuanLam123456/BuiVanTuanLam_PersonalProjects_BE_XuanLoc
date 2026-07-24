import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

const PAYMENT_METHODS = ["CASH", "BANK_TRANSFER", "ONLINE"];

const PAYMENT_STATUSES = ["PENDING", "PAID", "FAILED", "REFUNDED"];

const paymentInclude = {
  enrollments: {
    include: {
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

      classes: {
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
    },
  },
};

const parsePaymentDate = (value, fieldName) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new BadRequestError(`${fieldName} không hợp lệ`);
  }

  return date;
};

export const paymentService = {
  async create(req) {
    const body = req.body;

    const enrollmentId = Number(body.enrollment_id);

    if (!Number.isInteger(enrollmentId) || enrollmentId <= 0) {
      throw new BadRequestError("Mã ghi danh không hợp lệ");
    }

    const enrollment = await prisma.enrollments.findUnique({
      where: {
        id: enrollmentId,
      },

      include: {
        users: {
          select: {
            id: true,
            full_name: true,
            status: true,
          },
        },

        classes: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
    });

    if (!enrollment) {
      throw new BadRequestError("Thông tin ghi danh không tồn tại");
    }

    if (enrollment.status === "CANCELLED") {
      throw new BadRequestError(
        "Không thể tạo thanh toán cho ghi danh đã bị hủy",
      );
    }

    if (
      body.amount === undefined ||
      body.amount === null ||
      body.amount === ""
    ) {
      throw new BadRequestError("Số tiền thanh toán không được để trống");
    }

    const amount = Number(body.amount);

    if (Number.isNaN(amount) || amount <= 0) {
      throw new BadRequestError("Số tiền thanh toán phải lớn hơn 0");
    }

    const paymentMethod = body.payment_method || "CASH";

    if (!PAYMENT_METHODS.includes(paymentMethod)) {
      throw new BadRequestError("Phương thức thanh toán không hợp lệ");
    }

    const status = body.status || "PENDING";

    if (!PAYMENT_STATUSES.includes(status)) {
      throw new BadRequestError("Trạng thái thanh toán không hợp lệ");
    }

    if (status === "REFUNDED") {
      throw new BadRequestError(
        "Không thể tạo mới thanh toán với trạng thái đã hoàn tiền",
      );
    }

    const transactionCode = body.transaction_code?.trim() || null;

    if (
      ["BANK_TRANSFER", "ONLINE"].includes(paymentMethod) &&
      status === "PAID" &&
      !transactionCode
    ) {
      throw new BadRequestError(
        "Thanh toán chuyển khoản hoặc trực tuyến cần có mã giao dịch",
      );
    }

    if (transactionCode) {
      const existedTransaction = await prisma.payments.findFirst({
        where: {
          transaction_code: transactionCode,
        },
      });

      if (existedTransaction) {
        throw new BadRequestError("Mã giao dịch đã tồn tại");
      }
    }

    let paidAt = null;

    if (status === "PAID") {
      paidAt = body.paid_at
        ? parsePaymentDate(body.paid_at, "Thời gian thanh toán")
        : new Date();
    }

    const payment = await prisma.payments.create({
      data: {
        enrollment_id: enrollmentId,
        amount,
        payment_method: paymentMethod,
        transaction_code: transactionCode,
        status,
        paid_at: paidAt,
        note: body.note?.trim() || null,
      },

      include: paymentInclude,
    });

    return payment;
  },

  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const payments = await prisma.payments.findMany({
      where,

      include: paymentInclude,

      skip: index,
      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.payments.count({
      where,
    });

    return {
      items: payments,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      page,
      pageSize,
    };
  },

  async findOne(req) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      throw new BadRequestError("Mã thanh toán không hợp lệ");
    }

    const payment = await prisma.payments.findUnique({
      where: {
        id,
      },

      include: paymentInclude,
    });

    if (!payment) {
      throw new BadRequestError("Không tìm thấy thông tin thanh toán");
    }

    return payment;
  },

  async update(req) {
    const id = Number(req.params.id);
    const body = req.body;

    if (!Number.isInteger(id) || id <= 0) {
      throw new BadRequestError("Mã thanh toán không hợp lệ");
    }

    const payment = await prisma.payments.findUnique({
      where: {
        id,
      },
    });

    if (!payment) {
      throw new BadRequestError("Không tìm thấy thông tin thanh toán");
    }

    let enrollmentId = payment.enrollment_id;

    if (body.enrollment_id !== undefined) {
      enrollmentId = Number(body.enrollment_id);

      if (!Number.isInteger(enrollmentId) || enrollmentId <= 0) {
        throw new BadRequestError("Mã ghi danh không hợp lệ");
      }

      const enrollment = await prisma.enrollments.findUnique({
        where: {
          id: enrollmentId,
        },
      });

      if (!enrollment) {
        throw new BadRequestError("Thông tin ghi danh không tồn tại");
      }

      if (enrollment.status === "CANCELLED") {
        throw new BadRequestError(
          "Không thể chuyển thanh toán sang ghi danh đã bị hủy",
        );
      }
    }

    const amount =
      body.amount !== undefined ? Number(body.amount) : Number(payment.amount);

    if (Number.isNaN(amount) || amount <= 0) {
      throw new BadRequestError("Số tiền thanh toán phải lớn hơn 0");
    }

    const paymentMethod =
      body.payment_method !== undefined
        ? body.payment_method
        : payment.payment_method;

    if (!PAYMENT_METHODS.includes(paymentMethod)) {
      throw new BadRequestError("Phương thức thanh toán không hợp lệ");
    }

    const status = body.status !== undefined ? body.status : payment.status;

    if (!PAYMENT_STATUSES.includes(status)) {
      throw new BadRequestError("Trạng thái thanh toán không hợp lệ");
    }

    if (
      status === "REFUNDED" &&
      !["PAID", "REFUNDED"].includes(payment.status)
    ) {
      throw new BadRequestError(
        "Chỉ có thể hoàn tiền cho giao dịch đã thanh toán",
      );
    }

    const transactionCode =
      body.transaction_code !== undefined
        ? body.transaction_code?.trim() || null
        : payment.transaction_code;

    if (
      ["BANK_TRANSFER", "ONLINE"].includes(paymentMethod) &&
      status === "PAID" &&
      !transactionCode
    ) {
      throw new BadRequestError(
        "Thanh toán chuyển khoản hoặc trực tuyến cần có mã giao dịch",
      );
    }

    if (transactionCode) {
      const existedTransaction = await prisma.payments.findFirst({
        where: {
          transaction_code: transactionCode,

          id: {
            not: id,
          },
        },
      });

      if (existedTransaction) {
        throw new BadRequestError("Mã giao dịch đã tồn tại");
      }
    }

    let paidAt = payment.paid_at;

    if (status === "PAID") {
      if (body.paid_at !== undefined) {
        paidAt = body.paid_at
          ? parsePaymentDate(body.paid_at, "Thời gian thanh toán")
          : new Date();
      } else if (!paidAt) {
        paidAt = new Date();
      }
    }

    if (["PENDING", "FAILED"].includes(status)) {
      paidAt = null;
    }

    /*
     * Khi REFUNDED, giữ lại paid_at để biết
     * giao dịch ban đầu đã được thanh toán lúc nào.
     */

    const updatedPayment = await prisma.payments.update({
      where: {
        id,
      },

      data: {
        enrollment_id: enrollmentId,
        amount,
        payment_method: paymentMethod,
        transaction_code: transactionCode,
        status,
        paid_at: paidAt,

        note:
          body.note !== undefined ? body.note?.trim() || null : payment.note,
      },

      include: paymentInclude,
    });

    return updatedPayment;
  },

  async delete(req) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      throw new BadRequestError("Mã thanh toán không hợp lệ");
    }

    const payment = await prisma.payments.findUnique({
      where: {
        id,
      },
    });

    if (!payment) {
      throw new BadRequestError("Không tìm thấy thông tin thanh toán");
    }

    if (["PAID", "REFUNDED"].includes(payment.status)) {
      throw new BadRequestError(
        "Không thể xóa giao dịch đã thanh toán hoặc đã hoàn tiền",
      );
    }

    await prisma.payments.delete({
      where: {
        id,
      },
    });

    return true;
  },
};
