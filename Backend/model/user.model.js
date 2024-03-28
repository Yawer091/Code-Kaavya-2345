const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
});
const userModel = mongoose.model("user", UserSchema);

module.exports = {
  userModel
}