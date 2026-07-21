import { responseSuccess } from "../common/helpers/response.helper.js";
import { courseCategoryService } from "../services/course-category.service.js";

export const courseCategoryController = {
  async findAll(req, res, next) {
    try {
      const categories = await courseCategoryService.findAll(req);

      res.json(
        responseSuccess(
          categories,
          "Lấy danh sách danh mục khóa học thành công",
        ),
      );
    } catch (error) {
      next(error);
    }
  },
};
