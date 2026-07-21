import { responseSuccess } from "../common/helpers/response.helper.js";
import { authService } from "../services/auth.service.js";

export const authController = {
  async register(req, res, next) {
    try {
      const user = await authService.register(req);

      res.json(responseSuccess(user, "Đăng ký thành công"));
    } catch (error) {
      next(error);
    }
  },

  async login(req, res, next) {
    try {
      const result = await authService.login(req);

      res.cookie("accessToken", result.accessToken, {
        httpOnly: true,
      });

      res.cookie("refreshToken", result.refreshToken, {
        httpOnly: true,
      });

      res.json(
        responseSuccess(
          {
            accessToken: result.accessToken,

            user: result.user,
          },

          "Đăng nhập thành công",
        ),
      );
    } catch (error) {
      next(error);
    }
  },

  async refreshToken(req, res, next) {
    try {
      const result = await authService.refreshToken(req);

      res.json(responseSuccess(result, "Refresh token thành công"));
    } catch (error) {
      next(error);
    }
  },

  async logout(req, res, next) {
    try {
      await authService.logout(req);

      res.clearCookie("refreshToken");

      res.json(responseSuccess(null, "Đăng xuất thành công"));
    } catch (error) {
      next(error);
    }
  },

  async profile(req, res, next) {
    try {
      const user = await authService.profile(req);

      res.json(responseSuccess(user, "Lấy thông tin cá nhân thành công"));
    } catch (error) {
      next(error);
    }
  },

  async resetPassword(req, res, next) {
    try {
      const result = await authService.resetPassword(req);

      res.json(responseSuccess(result, "Đổi mật khẩu thành công"));
    } catch (error) {
      next(error);
    }
  },

  async forgotPassword(req, res, next) {
    try {
      const result = await authService.forgotPassword(req);

      const response = responseSuccess(result, "Gửi mã OTP thành công");

      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async verifyResetOTP(req, res, next) {
    try {
      const result = await authService.verifyResetOTP(req);

      const response = responseSuccess(result, "Xác thực OTP thành công");

      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async resetPasswordToken(req, res, next) {
    try {
      const result = await authService.resetPasswordToken(req);

      const response = responseSuccess(result, "Đặt lại mật khẩu thành công");

      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};
