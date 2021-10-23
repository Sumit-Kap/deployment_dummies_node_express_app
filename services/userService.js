const User = require("../model/user");
const mongoose = require("mongoose");

const userService = {
  postUsersService: async (requestBody, cb) => {
    const { name, email, age } = requestBody;
    const response = await User.findOne({ email: email });
    if (response) {
      cb({ message: "user already exists", statusCode: 409 }, null);
      return;
    }
    const user = new User({
      email,
      name,
      age,
      user_id: mongoose.Types.ObjectId(),
    });
    User.save()
      .then((response) => {
        console.log("print response", response);
        cb(null, response);
        return;
      })
      .catch((err) => {
        console.log(err);
        cb({ message: err, statusCode: 500 }, null);
        return;
      });
  },
  getUsersService: (cb) => {
    User.find({}, (err, response) => {
      if (err) {
        cb({ message: err, statusCode: 500 }, null);
        return;
      }
      cb(null, response);
      return;
    });
  },
  updateUserService: (id, email, cb) => {
    User.findOneAndUpdate(
      { _id: id },
      { $set: { email: email } },
      { new: true },
      (err, response) => {
        if (err) {
          cb({ message: err, statusCode: 500 }, null);
          return;
        }
        cb(null, response);
        return;
      }
    );
  },
  deleteUser: async (id, cb) => {
    // User.findOneAndDelete({ _id: id }, (err, response) => {
    //   if (err) {
    //     cb({ message: err, statusCode: 500 }, null);
    //     return;
    //   }
    //   cb(null, response);
    //   return;
    // });
    const response = await User.findOneAndDelete({ _id: id });

    console.log(response);
  },
};

module.exports = userService;
