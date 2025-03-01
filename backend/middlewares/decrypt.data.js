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
    return res.status(500).json({
      message: "Error while fetching information...",
    });
  }
};

module.exports = decryptData;
