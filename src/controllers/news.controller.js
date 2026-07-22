import { responseSuccess } from "../common/helpers/response.helper.js";
import { newsService } from "../services/news.service.js";

export const newsController = {
  async findAll(req, res, next) {
    try {
      const data = await newsService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách tin tức thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await newsService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết tin tức thành công"));
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const data = await newsService.create(req);

      res.json(responseSuccess(data, "Tạo tin tức thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await newsService.update(req);

      res.json(responseSuccess(data, "Cập nhật tin tức thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await newsService.delete(req);

      res.json(responseSuccess(data, "Xóa tin tức thành công"));
    } catch (error) {
      next(error);
    }
  },
};
