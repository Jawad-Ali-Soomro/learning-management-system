const Course = require("./course.model");
const Enrollment = require("./enrollment.model");
const Lesson = require("./lesson.model");
const Payment = require("./payment.model");
const Quiz = require("./quiz.model");
const Review = require("./review.model");
const User = require("./user.model");

module.exports = { User, Lesson, Course, Review, Payment, Enrollment, Quiz };
