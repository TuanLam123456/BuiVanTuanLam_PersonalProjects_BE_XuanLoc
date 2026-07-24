import { responseSuccess } from "../common/helpers/response.helper.js";
import { placementTestService } from "../services/placement-test.service.js";

export const placementTestController = {
  async create(req, res, next) {
    try {
      const data = await placementTestService.create(req);

      res.json(responseSuccess(data, "Tạo placement test thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findAll(req, res, next) {
    try {
      const data = await placementTestService.findAll(req);

      res.json(
        responseSuccess(data, "Lấy danh sách placement test thành công"),
      );
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await placementTestService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết placement test thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await placementTestService.update(req);

      res.json(responseSuccess(data, "Cập nhật placement test thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await placementTestService.delete(req);

      res.json(responseSuccess(data, "Xóa placement test thành công"));
    } catch (error) {
      next(error);
    }
  },
};
