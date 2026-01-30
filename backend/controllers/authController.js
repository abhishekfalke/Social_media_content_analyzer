const User = require("../models/userModel");
const { createSecretToken } = require("../util/secretToken");
const bcrypt = require("bcryptjs");

const cookieOptions = {
  httpOnly: true,
  path: "/",
  sameSite: "none", 
  secure: true      
};

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, cookieOptions);

    user.password = undefined;

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user
    });

  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      message: "User logged in successfully",
      success: true
    });

  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.Logout = async (req, res, next) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      path: "/",
      sameSite: "none",
      secure: true,
      expires: new Date(0),
    });

    return res.status(200).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
