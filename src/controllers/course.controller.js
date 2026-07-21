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
};
