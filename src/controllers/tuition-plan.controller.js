import { responseSuccess } from "../common/helpers/response.helper.js";
import { tuitionPlanService } from "../services/tuition-plan.service.js";

export const tuitionPlanController = {
  async create(req, res, next) {
    try {
      const data =
        await tuitionPlanService.create(req);

      res.json(
        responseSuccess(
          data,
          "Tạo gói học phí thành công"
        )
      );
    } catch (error) {
      next(error);
    }
  },

  async findAll(req, res, next) {
    try {
      const data =
        await tuitionPlanService.findAll(req);

      res.json(
        responseSuccess(
          data,
          "Lấy danh sách gói học phí thành công"
        )
      );
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data =
        await tuitionPlanService.findOne(req);

      res.json(
        responseSuccess(
          data,
          "Lấy chi tiết gói học phí thành công"
        )
      );
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data =
        await tuitionPlanService.update(req);

      res.json(
        responseSuccess(
          data,
          "Cập nhật gói học phí thành công"
        )
      );
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data =
        await tuitionPlanService.delete(req);

      res.json(
        responseSuccess(
          data,
          "Xóa gói học phí thành công"
        )
      );
    } catch (error) {
      next(error);
    }
  },
};