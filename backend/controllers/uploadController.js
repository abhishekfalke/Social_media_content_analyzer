const Sentiment = require('sentiment')
const sentiment = new Sentiment();
const Document = require('../models/document')
const { extractText } = require('../util/ocr_pdfParse');
const { uploadPdf } = require('../util/pdfParser');

module.exports.uploadFile = async (req, res, next) => {
  try {
    const userId = req.user
    const fileUrl = req.file.path
    const fileType = req.file.mimetype

    if (fileType === "application/pdf") {

      const text = await uploadPdf(fileUrl, fileType)
      const result = sentiment.analyze(text);

      const doc = await Document.create({
        user: userId,
        fileUrl,
        fileType,
        extractedText: text,
        analysis: result
      })

      res.json({message: 'File uploaded and data saved!', status: true, doc})
    } else if (fileType.startsWith("image/")) {
        const text = await extractText(fileUrl, fileType)
        const result = sentiment.analyze(text);

        const doc = await Document.create({
          user: userId,
          fileUrl,
          fileType,
          extractedText: text,
          analysis: result
        })

        res.json({message: 'File uploaded and data saved!', status: true, doc})     
      }

    return res.json({message: 'Unsupported file type!', status: false})
  } catch (error) {
      console.log(error)
      next()
  }
}

