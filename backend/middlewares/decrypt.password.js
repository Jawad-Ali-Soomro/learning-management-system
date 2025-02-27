const bcrypt = require("bcryptjs");
export const comparePassword = async (password, userPassword) => {
  try {
    const comparedPassword = await bcrypt.compare(password, userPassword);
    if (comparePassword) {
      return comparedPassword;
    } else {
      return false;
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error while decrypting...",
    });
  }
};
