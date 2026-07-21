import { responseSuccess } from "../common/helpers/response.helper.js";
import { teacherService } from "../services/teacher.service.js";

export const teacherController = {
  async findAll(req, res, next) {
    try {
      const teachers = await teacherService.findAll(req);

      res.json(responseSuccess(teachers, "Lấy danh sách giáo viên thành công"));
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const teacher = await teacherService.create(req);

      res.json(responseSuccess(teacher, "Tạo giáo viên thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await teacherService.update(req);

      res.json(responseSuccess(data, "Cập nhật giáo viên thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await teacherService.delete(req);

      res.json(responseSuccess(data, "Xóa giáo viên thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const teacher = await teacherService.findOne(req);

      res.json(responseSuccess(teacher, "Lấy chi tiết giáo viên thành công"));
    } catch (error) {
      next(error);
    }
  },
};
