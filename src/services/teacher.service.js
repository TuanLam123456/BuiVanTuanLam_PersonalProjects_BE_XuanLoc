import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";
import fs from "fs";
import path from "path";
export const teacherService = {
  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const teachers = await prisma.teachers.findMany({
      where: {
        ...where,

        status: "ACTIVE",
      },

      include: {
        teacher_courses: {
          include: {
            courses: true,
          },
        },
      },

      skip: index,

      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.teachers.count({
      where: {
        ...where,

        status: "ACTIVE",
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      items: teachers,

      totalItems,

      totalPages,

      page,

      pageSize,
    };
  },

  async create(req) {
    const body = req.body;

    try {
      // 1. Kiểm tra user tồn tại
      const user = await prisma.users.findUnique({
        where: {
          id: Number(body.user_id),
        },
      });

      if (!user) {
        throw new BadRequestError("User không tồn tại");
      }

      // 2. Kiểm tra user đã có teacher profile chưa
      const existTeacher = await prisma.teachers.findUnique({
        where: {
          user_id: Number(body.user_id),
        },
      });

      if (existTeacher) {
        throw new BadRequestError("User này đã là giáo viên");
      }

      // 3. Update role user -> teacher
      await prisma.users.update({
        where: {
          id: Number(body.user_id),
        },

        data: {
          role_id: 2,
        },
      });

      // 4. Tạo teacher profile
      const teacher = await prisma.teachers.create({
        data: {
          user_id: Number(body.user_id),

          avatar: req.file ? req.file.filename : null,

          experience: body.experience,

          specialization: body.specialization,

          education: body.education,

          introduction: body.introduction,

          status: "ACTIVE",
        },

        include: {
          users: true,
        },
      });

      return teacher;
    } catch (error) {
      // rollback file nếu database lỗi
      if (req.file) {
        const filePath = path.join("public/images", req.file.filename);

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      throw error;
    }
  },

  async update(req) {
    const { id } = req.params;

    const body = req.body;

    try {
      const teacher = await prisma.teachers.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!teacher) {
        throw new BadRequestError("Không tìm thấy giáo viên");
      }

      const oldAvatar = teacher.avatar;

      const teacherUpdate = await prisma.teachers.update({
        where: {
          id: Number(id),
        },

        data: {
          avatar: req.file ? req.file.filename : teacher.avatar,

          experience: body.experience,

          specialization: body.specialization,

          education: body.education,

          introduction: body.introduction,

          status: body.status,
        },

        include: {
          users: true,
        },
      });

      // update thành công thì xóa ảnh cũ
      if (req.file && oldAvatar) {
        const oldPath = path.join("public/images", oldAvatar);

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      return teacherUpdate;
    } catch (error) {
      // lỗi thì xóa ảnh mới upload
      if (req.file) {
        const newPath = path.join("public/images", req.file.filename);

        if (fs.existsSync(newPath)) {
          fs.unlinkSync(newPath);
        }
      }

      throw error;
    }
  },

  async delete(req) {
    const { id } = req.params;

    const teacher = await prisma.teachers.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!teacher) {
      throw new BadRequestError("Không tìm thấy giáo viên");
    }

    // xóa avatar
    if (teacher.avatar) {
      const filePath = path.join("public/images", teacher.avatar);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await prisma.$transaction(async (tx) => {
      // xóa profile teacher
      await tx.teachers.delete({
        where: {
          id: Number(id),
        },
      });

      // trả quyền user về student
      await tx.users.update({
        where: {
          id: teacher.user_id,
        },

        data: {
          role_id: 3,
        },
      });
    });

    return true;
  },
};
