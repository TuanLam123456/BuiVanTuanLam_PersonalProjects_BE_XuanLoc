import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

import fs from "fs";
import path from "path";

const STATUS = ["DRAFT", "PUBLISHED", "CLOSED"];

export const assignmentService = {
  async create(req) {
    const body = req.body;

    try {
      const classId = Number(body.class_id);

      const teacherId = Number(body.teacher_id);

      const classData = await prisma.classes.findUnique({
        where: {
          id: classId,
        },
      });

      if (!classData) {
        throw new BadRequestError("Lớp học không tồn tại");
      }

      const teacher = await prisma.teachers.findUnique({
        where: {
          id: teacherId,
        },
      });

      if (!teacher) {
        throw new BadRequestError("Giáo viên không tồn tại");
      }

      if (!body.title?.trim()) {
        throw new BadRequestError("Tên bài tập không được để trống");
      }

      const status = body.status || "DRAFT";

      if (!STATUS.includes(status)) {
        throw new BadRequestError("Trạng thái bài tập không hợp lệ");
      }

      const assignment = await prisma.assignments.create({
        data: {
          class_id: classId,

          teacher_id: teacherId,

          title: body.title.trim(),

          description: body.description || null,

          attachment: req.file ? req.file.filename : null,

          due_date: body.due_date ? new Date(body.due_date) : null,

          status,
        },

        include: {
          classes: true,

          teachers: {
            include: {
              users: {
                select: {
                  id: true,
                  full_name: true,
                  email: true,
                  phone: true,
                },
              },
            },
          },
        },
      });

      return assignment;
    } catch (error) {
      if (req.file) {
        const filePath = path.join("public/images", req.file.filename);

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      throw error;
    }
  },

  async findAll(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const assignments = await prisma.assignments.findMany({
      where,

      include: {
        classes: {
          include: {
            courses: true,
          },
        },

        teachers: {
          include: {
            users: {
              select: {
                id: true,
                full_name: true,
                email: true,
                phone: true,
              },
            },
          },
        },
      },

      skip: index,

      take: pageSize,

      orderBy: {
        id: "desc",
      },
    });

    const totalItems = await prisma.assignments.count({
      where,
    });

    return {
      items: assignments,

      totalItems,

      totalPages: Math.ceil(totalItems / pageSize),

      page,

      pageSize,
    };
  },

  async findOne(req) {
    const id = Number(req.params.id);

    const assignment = await prisma.assignments.findUnique({
      where: {
        id,
      },

      include: {
        classes: {
          include: {
            courses: true,

            enrollments: {
              include: {
                users: {
                  select: {
                    id: true,
                    full_name: true,
                    email: true,
                  },
                },
              },
            },
          },
        },

        teachers: {
          include: {
            users: {
              select: {
                id: true,
                full_name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!assignment) {
      throw new BadRequestError("Không tìm thấy bài tập");
    }

    return assignment;
  },

  async update(req) {
    const id = Number(req.params.id);

    const body = req.body;

    try {
      const old = await prisma.assignments.findUnique({
        where: {
          id,
        },
      });

      if (!old) {
        throw new BadRequestError("Không tìm thấy bài tập");
      }

      const status = body.status ?? old.status;

      if (!STATUS.includes(status)) {
        throw new BadRequestError("Trạng thái bài tập không hợp lệ");
      }

      const updated = await prisma.assignments.update({
        where: {
          id,
        },

        data: {
          title: body.title ? body.title.trim() : old.title,

          description:
            body.description !== undefined
              ? body.description || null
              : old.description,

          attachment: req.file ? req.file.filename : old.attachment,

          due_date: body.due_date ? new Date(body.due_date) : old.due_date,

          status,
        },

        include: {
          classes: true,

          teachers: true,
        },
      });

      if (req.file && old.attachment) {
        const oldPath = path.join("public/images", old.attachment);

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      return updated;
    } catch (error) {
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
    const id = Number(req.params.id);

    const assignment = await prisma.assignments.findUnique({
      where: {
        id,
      },
    });

    if (!assignment) {
      throw new BadRequestError("Không tìm thấy bài tập");
    }

    if (assignment.attachment) {
      const filePath = path.join("public/images", assignment.attachment);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await prisma.assignments.delete({
      where: {
        id,
      },
    });

    return true;
  },
};
