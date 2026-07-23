import { responseSuccess } from "../common/helpers/response.helper.js";
import { registrationService } from "../services/registration.service.js";

export const registrationController = {
  async create(req, res, next) {
    try {
      const data = await registrationService.create(req);

      res.json(responseSuccess(data, "Gửi đăng ký thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findAll(req, res, next) {
    try {
      const data = await registrationService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách đăng ký thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await registrationService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết đăng ký thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await registrationService.update(req);

      res.json(responseSuccess(data, "Cập nhật đăng ký thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await registrationService.delete(req);

      res.json(responseSuccess(data, "Xóa đăng ký thành công"));
    } catch (error) {
      next(error);
    }
  },
};
