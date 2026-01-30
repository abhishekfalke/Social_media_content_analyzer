const Document = require('../models/document')

module.exports.getHistory = async (req, res, next) => {
  try {
    const userId = req.user

    const docs = await Document.find({user: userId}).sort({ createdAt: -1 })
    
    res.json({status: true, docs})
  } catch (error) {
    console.log(error);
    next()
  }
}