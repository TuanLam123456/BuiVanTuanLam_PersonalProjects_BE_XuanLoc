import { responseSuccess } from "../common/helpers/response.helper.js";
import { gradeService } from "../services/grade.service.js";

export const gradeController = {
  async create(req, res, next) {
    try {
      const data = await gradeService.create(req);

      res.json(responseSuccess(data, "Tạo điểm thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findAll(req, res, next) {
    try {
      const data = await gradeService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách điểm thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await gradeService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết điểm thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await gradeService.update(req);

      res.json(responseSuccess(data, "Cập nhật điểm thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await gradeService.delete(req);

      res.json(responseSuccess(data, "Xóa điểm thành công"));
    } catch (error) {
      next(error);
    }
  },
};
