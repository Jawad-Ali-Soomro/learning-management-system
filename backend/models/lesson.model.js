const mongoose = require("mongoose");
const lessonSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  videoUrl: { type: String },
});

const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports = Lesson;
