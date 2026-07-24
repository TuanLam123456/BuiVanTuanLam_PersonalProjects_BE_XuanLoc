import { responseSuccess } from "../common/helpers/response.helper.js";
import { classService } from "../services/class.service.js";

export const classController = {
  async create(req, res, next) {
    try {
      const data = await classService.create(req);

      res.json(responseSuccess(data, "Tạo lớp học thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findAll(req, res, next) {
    try {
      const data = await classService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách lớp học thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await classService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết lớp học thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await classService.update(req);

      res.json(responseSuccess(data, "Cập nhật lớp học thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await classService.delete(req);

      res.json(responseSuccess(data, "Xóa lớp học thành công"));
    } catch (error) {
      next(error);
    }
  },
};
