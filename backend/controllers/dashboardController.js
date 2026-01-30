const Document = require('../models/document')
const User = require('../models/userModel')

module.exports.getDashboardData = async (req, res, next) => {
  try {
    const userId = req.user
    const user = await User.findById(userId)
    const totalUploads = await Document.countDocuments({user: userId})
    const lastUpload = await Document.findOne({user: userId}).sort({createdAt: -1})
    
    res.json({
      totalUploads,
      lastUpload,
      status: true,
      user: user.username
    })
  } catch (error) {
    console.log(error);
    next()
  }
}