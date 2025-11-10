const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
// Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String
});

// Create Model
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
