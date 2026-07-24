import { responseSuccess } from "../common/helpers/response.helper.js";
import { assignmentService } from "../services/assignment.service.js";

export const assignmentController = {
  async create(req, res, next) {
    try {
      const data = await assignmentService.create(req);

      res.json(responseSuccess(data, "Tạo bài tập thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findAll(req, res, next) {
    try {
      const data = await assignmentService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách bài tập thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await assignmentService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết bài tập thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await assignmentService.update(req);

      res.json(responseSuccess(data, "Cập nhật bài tập thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await assignmentService.delete(req);

      res.json(responseSuccess(data, "Xóa bài tập thành công"));
    } catch (error) {
      next(error);
    }
  },
};
