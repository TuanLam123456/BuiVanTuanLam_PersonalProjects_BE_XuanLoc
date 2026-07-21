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
};
