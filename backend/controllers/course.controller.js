const { decryptData } = require("../middlewares");
const { Course } = require("../models");

const new_course = async (req, res) => {
  try {
    const verify_token = await decryptData(req.body.token);
    if (verify_token) {
      const created_course = await Course.create(req.body);
      if (!created_course) {
        return res.status(404).json({
          message: "Error while creating course...",
        });
      } else {
        return ers.status(200).json({
          message: "Course created...",
          course: created_course,
        });
      }
    } else {
      return res.status(404).json({
        message: "Session expired, please login again...",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error",
      err_message: error.message,
    });
  }
};

module.exports = { new_course };
