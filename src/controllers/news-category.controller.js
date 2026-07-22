import { responseSuccess } from "../common/helpers/response.helper.js";
import { newsCategoryService } from "../services/news-category.service.js";

export const newsCategoryController = {
  async findAll(req, res, next) {
    try {
      const data = await newsCategoryService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách danh mục thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await newsCategoryService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết danh mục thành công"));
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const data = await newsCategoryService.create(req);

      res.json(responseSuccess(data, "Tạo danh mục thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await newsCategoryService.update(req);

      res.json(responseSuccess(data, "Cập nhật danh mục thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await newsCategoryService.delete(req);

      res.json(responseSuccess(data, "Xóa danh mục thành công"));
    } catch (error) {
      next(error);
    }
  },
};
