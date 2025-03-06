const {
  comparePassword,
  signJsonwebtoken,
  decryptData,
} = require("../middlewares");

const { User } = require("../models");

const new_user = async (req, res) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(300).json({
        message: "Account exists!",
      });
    } else {
      const newUser = await User.create(req.body);
      if (!newUser) {
        return res.status(301).json({
          message: "Error while creating account",
        });
      } else {
        return res.status(200).json({
          message: "Account created!",
          newUser,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const login_user = async (req, res) => {
  try {
    const { password, email } = req.body;
    const findUser = await User.findOne({ email: req.body.email });

    if (!findUser) {
      return res.status(300).json({
        message: "Account not found...",
      });
    }
    const comparedPassword = await comparePassword(password, findUser.password);
    if (!comparedPassword) {
      return res.status(301).json({
        message: "Invalid Password...",
      });
    }
    const token = await signJsonwebtoken(findUser);
    if (!token) {
      return res.status(302).json({
        message: "Error while generating token...",
      });
    }
    return res.status(200).json({
      message: "Logged in...",
      user: findUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error...",
      error: error.message,
    });
  }
};

const get_profile = async (req, res) => {
  const { token } = req.body;
  const decryptedData = await decryptData(token);
  return res.status(200).json({
    message: "Account Found",
    user: decryptedData,
  });
};

const update_profile = async (req, res) => {
  try {
    const { user_id } = req.params;
    const found_user = await User.findByIdAndUpdate(user_id, { ...req.body });
    if (found_user) {
      return res.status(404).json({
        message: "User found & updated...",
      });
    } else {
      return res.status(404).json({
        message: "User not found...",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const get_user = async (req, res) => {
  const { user_id } = req.params;
  const found_user = await User.findById(user_id);
  if (!found_user) {
    return res.status(404).json({
      message: "User not found...",
    });
  } else {
    return res.status(200).json({
      message: `${found_user?.length} User Found...`,
      user: found_user,
    });
  }
};

module.exports = {
  new_user,
  login_user,
  get_profile,
  update_profile,
  get_user,
};
