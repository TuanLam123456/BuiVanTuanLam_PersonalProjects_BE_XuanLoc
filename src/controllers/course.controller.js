import { responseSuccess } from "../common/helpers/response.helper.js";
import { courseService } from "../services/course.service.js";

export const courseController = {
  async findAll(req, res, next) {
    try {
      const courses = await courseService.findAll(req);

      res.json(responseSuccess(courses, "Lấy danh sách khóa học thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const course = await courseService.findOne(req);

      const response = responseSuccess(
        course,
        "Lấy chi tiết khóa học thành công",
      );

      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const course = await courseService.create(req);

      res.json(responseSuccess(course, "Tạo khóa học thành công"));
    } catch (error) {
      next(error);
    }
  },
};
