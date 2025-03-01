const bcrypt = require("bcryptjs");
const comparePassword = async (password, userPassword) => {
  try {
    const comparedPassword = await bcrypt.compare(password, userPassword);
    if (comparePassword) {
      return comparedPassword;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = comparePassword;
