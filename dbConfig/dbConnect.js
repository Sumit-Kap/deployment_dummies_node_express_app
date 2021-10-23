const mongoose = require("mongoose");

const dbConnect = {
  connect: () => {
    mongoose
      .connect("mongodb://127.0.0.1:27017/test")
      .then(() => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log("database connection failed", err);
      });
  },
};

module.exports = dbConnect;
