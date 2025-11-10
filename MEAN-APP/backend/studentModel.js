// studentModel.js
const mongoose = require("mongoose");

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Failed:", err));

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  marks: Number,
});

// Create model
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
