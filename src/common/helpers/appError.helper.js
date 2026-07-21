import { json } from "sequelize";
import { responseErr } from "./response.helper.js";
import  jwt  from 'jsonwebtoken';
import { statusCodes } from "./status-code.helper.js";

// middleware bắt lỗi, không được phép xảy ra lỗi mà không được xử lý, không được tồn tại lỗi từ logic
export const appError = (err, req, res, next) => {
  console.error("Lỗi ở middleware đặc biệt xử lý lỗi:", err);

  // console.log("app err",{
  //   message: err.message,
  //   statusCode: err.statusCode,
  //   stack: err.stack
  // })
  // lỗi do token không hợp lệ
  if(err instanceof jwt.JsonWebTokenError){
    // class JwtError là bắt tất cả lỗi liên quan đến jwt, bao gồm tất cả lỗi liên quan đến token
    err.code = statusCodes.FORBIDDEN // 403: fe sẽ refresh token
  }

  // lỗi do token hết hạn
  if(err instanceof jwt.TokenExpiredError){
    // class tokenExpiredError chỉ bắt tất cả lỗi liên quan đến token hết hạn
    err.code = statusCodes.UNAUTHORIZED // 401: fe sẽ logout người dùng
  }
  

  const response = responseErr(err?.message, err?.statusCode, err?.stack);

  res.status(response.statusCode).json(response);
};