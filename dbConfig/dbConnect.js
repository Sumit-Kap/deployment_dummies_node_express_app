const mongoose = require("mongoose");

const dbConnect = {
  connect: () => {
    mongoose
      .connect(process.env.DATABASE_URL)
      .then(() => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log("database connection failed", err);
      });
  },
};

module.exports = dbConnect;
