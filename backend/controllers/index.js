const { new_course } = require("./course.controller");
const {
  new_user,
  login_user,
  get_profile,
  update_profile,
  get_user,
} = require("./user.controller");

module.exports = {
  new_user,
  login_user,
  get_profile,
  update_profile,
  get_user,
  new_course,
};
