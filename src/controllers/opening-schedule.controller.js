import { responseSuccess } from "../common/helpers/response.helper.js";
import { openingScheduleService } from "../services/opening-schedule.service.js";

export const openingScheduleController = {
  async findAll(req, res, next) {
    try {
      const data = await openingScheduleService.findAll(req);

      res.json(
        responseSuccess(data, "Lấy danh sách lịch khai giảng thành công"),
      );
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await openingScheduleService.findOne(req);

      res.json(
        responseSuccess(data, "Lấy chi tiết lịch khai giảng thành công"),
      );
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const data = await openingScheduleService.create(req);

      res.json(responseSuccess(data, "Tạo lịch khai giảng thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await openingScheduleService.update(req);

      res.json(responseSuccess(data, "Cập nhật lịch khai giảng thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await openingScheduleService.delete(req);

      res.json(responseSuccess(data, "Xóa lịch khai giảng thành công"));
    } catch (error) {
      next(error);
    }
  },
};
