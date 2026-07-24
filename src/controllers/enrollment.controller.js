import { responseSuccess } from "../common/helpers/response.helper.js";
import { enrollmentService } from "../services/enrollment.service.js";

export const enrollmentController = {
  async create(req, res, next) {
    try {
      const data = await enrollmentService.create(req);

      res.json(responseSuccess(data, "Ghi danh học viên thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findAll(req, res, next) {
    try {
      const data = await enrollmentService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách ghi danh thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await enrollmentService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết ghi danh thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await enrollmentService.update(req);

      res.json(responseSuccess(data, "Cập nhật ghi danh thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await enrollmentService.delete(req);

      res.json(responseSuccess(data, "Xóa ghi danh thành công"));
    } catch (error) {
      next(error);
    }
  },
};
