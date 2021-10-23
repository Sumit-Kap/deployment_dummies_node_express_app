const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  user_id: ObjectId,
  email: { type: String, index: true },
  name: String,
  age: Number,
});

UserSchema.index({ name: 1 });

const User = mongoose.model("User", UserSchema);
module.exports = User;
