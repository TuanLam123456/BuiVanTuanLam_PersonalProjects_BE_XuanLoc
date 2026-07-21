import { ForbiddenError } from "../helpers/exception.helper.js";

export const authAdmin = async (req, res, next) => {
  const user = req.user;

  if (!user) {
    throw new ForbiddenError("Không có quyền truy cập");
  }

  if (user.role_id !== 1) {
    throw new ForbiddenError("Chỉ Admin được phép truy cập");
  }

  next();
};
