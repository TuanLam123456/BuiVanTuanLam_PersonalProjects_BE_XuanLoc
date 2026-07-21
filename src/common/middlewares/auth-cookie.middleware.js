import { UnauthorizedError } from "../helpers/exception.helper.js";
import { verifyAccessToken } from "../helpers/jwt.helper.js";
import { prisma } from "../prisma/connect.prisma.js";

export const authCookie = async (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    throw new UnauthorizedError("Không có token");
  }

  const decode = verifyAccessToken(accessToken);

  const userExists = await prisma.users.findUnique({
    where: {
      id: decode.id,
    },
  });

  if (!userExists) {
    throw new UnauthorizedError("Người dùng không tồn tại");
  }

  req.user = userExists;

  next();
};
