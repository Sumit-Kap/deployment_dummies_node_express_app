const userController = require("../controllers/userController");
const errorHandler = require("../utils/utils");
const routes = (app) => {
  app.post(
    "/postUsers",
    errorHandler.catchAsyncErrors(userController.postUsers)
  );
  app.get("/Users", errorHandler.catchAsyncErrors(userController.getUsers));
  app.put("/:id", errorHandler.catchAsyncErrors(userController.updateUser));
  app.delete("/:id", errorHandler.catchAsyncErrors(userController.deleteUser));
};

module.exports = routes;
