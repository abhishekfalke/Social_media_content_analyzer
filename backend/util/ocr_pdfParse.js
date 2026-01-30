const Tesseract = require("tesseract.js")
const pdfParse = require("pdf-parse")
const axios = require("axios")

module.exports.extractText = async (fileUrl, fileType) => {
  try {
    if (fileType.startsWith("image/")) {
      const { data } = await Tesseract.recognize(fileUrl, "eng")
      return data.text
    }
    
    return "Unsupported file type"
  } 
  catch (error) {
    console.error("Text extraction error:", error.message)
    console.error("Status:", error.response?.status)
    return "Extraction failed"
  }
}
