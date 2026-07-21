import bcrypt from "bcrypt";
import { prisma } from "../common/prisma/connect.prisma.js";

import {
  BadRequestError,
  UnauthorizedError,
} from "../common/helpers/exception.helper.js";

import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../common/helpers/jwt.helper.js";
import { generateOTP } from "../common/helpers/otp.helper.js";
import { sendMail } from "../common/email/mail.service.js";
import fs from "fs";
import path from "path";

export const authService = {
  async register(req) {
    const body = req.body;

    const existUser = await prisma.users.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existUser) {
      throw new BadRequestError("Email đã tồn tại");
    }

    const passwordHash = await bcrypt.hash(body.password, 10);

    const user = await prisma.users.create({
      data: {
        full_name: body.fullName,
        email: body.email,
        phone: body.phone,
        password_hash: passwordHash,
        role_id: body.role_id || 3,
      },

      select: {
        id: true,
        role_id: true,
        full_name: true,
        email: true,
        phone: true,
        avatar: true,
        date_of_birth: true,
        gender: true,
        address: true,
        status: true,
        created_at: true,
        updated_at: true,
      },
    });

    return user;
  },

  async login(req) {
    const { email, password } = req.body;

    // Lấy password_hash để compare
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedError("Email hoặc mật khẩu không đúng");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      throw new UnauthorizedError("Email hoặc mật khẩu không đúng");
    }

    const accessToken = signAccessToken({
      id: user.id,
      email: user.email,
      role_id: user.role_id,
    });

    const refreshToken = signRefreshToken({
      id: user.id,
    });

    await prisma.users.update({
      where: {
        id: user.id,
      },

      data: {
        refresh_token: refreshToken,
      },
    });

    const safeUser = await prisma.users.findUnique({
      where: {
        id: user.id,
      },

      select: {
        id: true,
        role_id: true,
        full_name: true,
        email: true,
        phone: true,
        avatar: true,
        date_of_birth: true,
        gender: true,
        address: true,
        status: true,
        created_at: true,
        updated_at: true,
      },
    });

    return {
      accessToken,
      refreshToken,
      user: safeUser,
    };
  },

  async refreshToken(req) {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      throw new UnauthorizedError("Không có refresh token");
    }

    const payload = verifyRefreshToken(refreshToken);

    const user = await prisma.users.findUnique({
      where: {
        id: payload.id,
      },
    });

    if (!user) {
      throw new UnauthorizedError("User không tồn tại");
    }

    const accessToken = signAccessToken({
      id: user.id,
      email: user.email,
      role_id: user.role_id,
    });

    return {
      accessToken,
    };
  },

  async logout(req) {
    const { refreshToken } = req.cookies;

    if (refreshToken) {
      const payload = verifyRefreshToken(refreshToken);

      await prisma.users.update({
        where: {
          id: payload.id,
        },

        data: {
          refresh_token: null,
        },
      });
    }

    return true;
  },

  async profile(req) {
    const userId = req.user.id;

    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },

      select: {
        id: true,

        role_id: true,

        full_name: true,

        email: true,

        phone: true,

        avatar: true,

        date_of_birth: true,

        gender: true,

        address: true,

        status: true,

        created_at: true,

        updated_at: true,
      },
    });

    if (!user) {
      throw new UnauthorizedError("Người dùng không tồn tại");
    }

    return user;
  },

  async resetPassword(req) {
    const { oldPassword, newPassword } = req.body;

    const userId = req.user.id;

    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new UnauthorizedError("Người dùng không tồn tại");
    }

    const isPasswordValid = await bcrypt.compare(
      oldPassword,
      user.password_hash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedError("Mật khẩu cũ không đúng");
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    const result = await prisma.users.update({
      where: {
        id: userId,
      },

      data: {
        password_hash: newPasswordHash,

        // logout toàn bộ thiết bị
        refresh_token: null,
      },

      select: {
        id: true,
        full_name: true,
        email: true,
      },
    });

    return result;
  },

  async forgotPassword(req) {
    const { email } = req.body;

    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new BadRequestError("Email không tồn tại");
    }

    const otp = generateOTP();

    await prisma.password_resets.create({
      data: {
        user_id: user.id,

        otp,

        expired_at: new Date(Date.now() + 5 * 60 * 1000),
      },
    });

    await sendMail(
      email,

      "Khôi phục mật khẩu Ngoại ngữ Xuân Lộc",

      `
        <h2>Xin chào ${user.full_name}</h2>

        <p>Mã OTP của bạn là:</p>

        <h1>${otp}</h1>

        <p>Mã có hiệu lực trong 5 phút.</p>
        `,
    );

    return true;
  },

  async verifyResetOTP(req) {
    const { email, otp } = req.body;

    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new BadRequestError("Email không tồn tại");
    }

    const resetRequest = await prisma.password_resets.findFirst({
      where: {
        user_id: user.id,

        otp: otp,

        is_used: false,
      },

      orderBy: {
        created_at: "desc",
      },
    });

    if (!resetRequest) {
      throw new BadRequestError("OTP không đúng");
    }

    if (new Date() > resetRequest.expired_at) {
      throw new BadRequestError("OTP đã hết hạn");
    }

    return {
      message: "OTP hợp lệ",

      userId: user.id,
    };
  },

  async resetPasswordToken(req) {
    const { email, otp, newPassword } = req.body;

    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new BadRequestError("Email không tồn tại");
    }

    const resetRequest = await prisma.password_resets.findFirst({
      where: {
        user_id: user.id,

        otp: otp,

        is_used: false,
      },

      orderBy: {
        created_at: "desc",
      },
    });

    if (!resetRequest) {
      throw new BadRequestError("OTP không hợp lệ");
    }

    if (new Date() > resetRequest.expired_at) {
      throw new BadRequestError("OTP đã hết hạn");
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    const result = await prisma.users.update({
      where: {
        id: user.id,
      },

      data: {
        password_hash: passwordHash,

        // logout các thiết bị cũ
        refresh_token: null,
      },

      select: {
        id: true,

        role_id: true,

        full_name: true,

        email: true,
      },
    });

    await prisma.password_resets.update({
      where: {
        id: resetRequest.id,
      },

      data: {
        is_used: true,
      },
    });

    return result;
  },

  async updateProfile(req) {
    const userId = req.user.id;

    const { full_name, phone, date_of_birth, gender, address } = req.body;

    // avatar cũ
    const oldAvatar = req.user.avatar;

    // avatar mới giữ nguyên nếu không upload
    let avatar = oldAvatar;

    if (req.file) {
      avatar = req.file.filename;
    }

    const user = await prisma.users.update({
      where: {
        id: userId,
      },

      data: {
        full_name,

        phone,

        date_of_birth: date_of_birth ? new Date(date_of_birth) : undefined,

        gender,

        address,

        avatar,
      },

      select: {
        id: true,

        role_id: true,

        full_name: true,

        email: true,

        phone: true,

        avatar: true,

        date_of_birth: true,

        gender: true,

        address: true,

        status: true,

        updated_at: true,
      },
    });

    // Sau khi update DB thành công mới xóa ảnh cũ
    if (req.file && oldAvatar) {
      const oldFilePath = path.join("public/images", oldAvatar);

      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }
    }

    return user;
  },
};
