const mongoose = require('mongoose')

const documentSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  fileUrl: String,
  fileType: String,
  extractedText: String,
  analysis: Object,
}, {timestamps: true})

module.exports = mongoose.model('Document', documentSchema)