const jwt = require("jsonwebtoken");
const decryptData = async (token) => {
  try {
    const decryptedData = await jwt.verify(token, process.env.DEV_JWT_SECRET);
    if (decryptData) {
      return decryptedData;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = decryptData;
