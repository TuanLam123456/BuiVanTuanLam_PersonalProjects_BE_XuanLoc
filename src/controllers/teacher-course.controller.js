import { responseSuccess } from "../common/helpers/response.helper.js";
import { teacherCourseService } from "../services/teacher-course.service.js";

export const teacherCourseController = {
  async findAll(req, res, next) {
    try {
      const data = await teacherCourseService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách phân công thành công"));
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const data = await teacherCourseService.create(req);

      res.json(responseSuccess(data, "Gán giáo viên vào khóa học thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await teacherCourseService.delete(req);

      res.json(responseSuccess(data, "Xóa phân công thành công"));
    } catch (error) {
      next(error);
    }
  },
};
