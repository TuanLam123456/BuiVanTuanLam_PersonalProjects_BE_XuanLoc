import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./src/common/constant/app.constant.js";
import { appError } from "./src/common/helpers/appError.helper.js";
import { logAPI } from "./src/common/middlewares/log-api.middleware.js";
import rootRouter from "./src/routers/root.router.js";

const app = express();

app.use(express.json()); // middleware để parse body của request có định dạng json

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
); // cho phép truy cập từ mọi domain

app.use(cookieParser()); // middleware để parse cookie từ request

app.use(logAPI);

// middleware dùng để public thư mục, cho phép client truy cập trực tiếp vào thư mục để lấy ảnh
app.use(express.static("public"));

// định nghĩa api
app.use("/api", rootRouter);

app.use(appError);

app.listen(PORT, () => {
  // sau khi server chạy thành công, sẽ tiếp tục thực thi các logic code bên trong callback
  console.log(`server online at port: ${PORT}`);
});

// express < 5: controller bắt buộc bọc try catch để xử lý lỗi, nếu không sẽ bị treo server khi có lỗi xảy ra

// npx prisma db pull -> tự động tạo model dựa trên database có sẵn (db first)
