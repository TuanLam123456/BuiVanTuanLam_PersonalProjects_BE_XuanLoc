import { responseSuccess } from "../common/helpers/response.helper.js";
import { trialRegistrationService } from "../services/trial-registration.service.js";

export const trialRegistrationController = {
  async create(req, res, next) {
    try {
      const data = await trialRegistrationService.create(req);

      res.json(responseSuccess(data, "Đăng ký học thử thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findAll(req, res, next) {
    try {
      const data = await trialRegistrationService.findAll(req);

      res.json(responseSuccess(data, "Lấy danh sách đăng ký thành công"));
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const data = await trialRegistrationService.findOne(req);

      res.json(responseSuccess(data, "Lấy chi tiết đăng ký thành công"));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await trialRegistrationService.update(req);

      res.json(responseSuccess(data, "Cập nhật đăng ký thành công"));
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const data = await trialRegistrationService.delete(req);

      res.json(responseSuccess(data, "Xóa đăng ký thành công"));
    } catch (error) {
      next(error);
    }
  },
};
