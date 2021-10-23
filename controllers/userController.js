const userService = require("../services/userService");
const userController = {
  postUsers: (req, res) => {
    userService.postUsersService(req.body, (error, response) => {
      if (error) {
        res.status(error.statusCode).json({
          status: error.statusCode,
          message: error.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: response,
        });
      }
    });
  },
  getUsers: (req, res) => {
    userService.getUsersService((err, response) => {
      if (err) {
        res.status(err.statusCode).json({
          status: err.statusCode,
          message: err.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: response,
        });
      }
    });
  },
  updateUser: (req, res) => {
    const { id } = req.params;
    const { email } = req.body;

    userService.updateUserService(id, email, (err, response) => {
      if (err) {
        res.status(err.statusCode).json({
          status: err.statusCode,
          message: err.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: response,
        });
      }
    });
  },
  deleteUser: (req, res) => {
    const { id } = req.params;
    userService.deleteUser(id, (err, response) => {
      if (err) {
        console.log("In here");
        throw new Error({ statusCode: 500, message: err });
        res.status(err.statusCode).json({
          status: err.statusCode,
          message: err.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: response,
        });
      }
    });
  },
};

module.exports = userController;
