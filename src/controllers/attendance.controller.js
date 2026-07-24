import { responseSuccess } from "../common/helpers/response.helper.js";
import { attendanceService } from "../services/attendance.service.js";

export const attendanceController = {
  async create(req, res, next) {
    try {
      const data = await attendanceService.create(req);

      res.json(responseSuccess(data, "Tạo điểm danh thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findAll(req, res, next) {
    try {
      const data = await attendanceService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách điểm danh thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await attendanceService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết điểm danh thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await attendanceService.update(req);

      res.json(responseSuccess(data, "Cập nhật điểm danh thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await attendanceService.delete(req);

      res.json(responseSuccess(data, "Xóa điểm danh thành công"));
    } catch (error) {
      next(error);
    }
  },
};
