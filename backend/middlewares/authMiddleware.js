const User = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const { token } = req.cookies

  if (!token) {
    return res.json({message: "Not authorized", status: false })
  }
  
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({message: 'Invalid token', status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) {
        req.user = data.id
        next()
      }
      else {
        return res.json({message: 'Invalid token', status: false })
      }
    }
  })
}