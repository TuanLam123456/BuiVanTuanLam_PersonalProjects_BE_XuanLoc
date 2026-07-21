import { prisma } from "../common/prisma/connect.prisma.js";


export const userService = {

  async findAll(req) {

    const users = await prisma.users.findMany({
      include: {
        roles: true,
      },
    });


    return users;
  },

};