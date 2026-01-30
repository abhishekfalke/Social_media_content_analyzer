const axios = require("axios");
const { PDFParse } = require("pdf-parse");

module.exports.uploadPdf = async (fileUrl, fileType) => {
  try {

    if (fileType === "application/pdf") {

      const parser = new PDFParse({
        url: fileUrl
      })

      const result = await parser.getText()
      console.log(result.text);

      return result.text;
    }

    return "Unsupported file type";
  } catch (err) {
    console.error("PDF extraction error:", err);
    return "Extraction failed";
  }
};
