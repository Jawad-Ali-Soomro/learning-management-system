const jwt = require("jsonwebtoken");
const signJsonwebtoken = async (data) => {
  try {
    const signedData = await jwt.sign({ data }, process.env.DEV_JWT_SECRET);
    if (signedData) {
      return signedData;
    }
    return false;
  } catch (error) {
    return console.log("Error while signing data...");
  }
};

module.exports = signJsonwebtoken;
