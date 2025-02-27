const jwt = require("jsonwebtoken");
export const signJsonwebtoken = async (data) => {
  try {
    const signedData = await jwt.sign(data, process.env.DEV_JWT_SECRET);
    if (signedData) {
      return signedData;
    }
    return false;
  } catch (error) {
    return res.status(500).json({
      message: "Error while signing data...",
    });
  }
};
