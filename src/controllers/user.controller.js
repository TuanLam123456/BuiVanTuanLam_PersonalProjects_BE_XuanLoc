import { responseSuccess } from "../common/helpers/response.helper.js";
import { userService } from "../services/user.service.js";


export const userController = {

  async findAll(req, res, next) {

    try {

      const users = await userService.findAll(req);


      const response = responseSuccess(
        users,
        "Lấy danh sách User thành công"
      );


      res.json(response);


    } catch (error) {

      next(error);

    }

  },

};