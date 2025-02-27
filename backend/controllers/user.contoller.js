import { comparePassword } from "../middlewares";
import { signJsonwebtoken } from "../middlewares/jwt.sign";

const { User } = require("../models");

export const new_user = async (req, res) => {
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

export const login_user = async (req, res) => {
  const { password, email } = req.body;
  const findUser = await User.findOne({ email });
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
};
