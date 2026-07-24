import { responseSuccess } from "../common/helpers/response.helper.js";
import { paymentService } from "../services/payment.service.js";

export const paymentController = {
  async create(req, res, next) {
    try {
      const data = await paymentService.create(req);

      res.json(responseSuccess(data, "Tạo thanh toán thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findAll(req, res, next) {
    try {
      const data = await paymentService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách thanh toán thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await paymentService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết thanh toán thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await paymentService.update(req);

      res.json(responseSuccess(data, "Cập nhật thanh toán thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await paymentService.delete(req);

      res.json(responseSuccess(data, "Xóa thanh toán thành công"));
    } catch (error) {
      next(error);
    }
  },
};
