module.exports.uploadFile = async (req, res, next) => {
  try {
    const userId = req.user;
    const fileUrl = req.file.path;
    const fileType = req.file.mimetype;

    let text;

    if (fileType === "application/pdf") {
      text = await uploadPdf(fileUrl, fileType);
    } 
    else if (fileType.startsWith("image/")) {
      text = await extractText(fileUrl, fileType);
    } 
    else {
      return res.json({ message: "Unsupported file type!", status: false });
    }

    const result = sentiment.analyze(text);

    const doc = await Document.create({
      user: userId,
      fileUrl,
      fileType,
      extractedText: text,
      analysis: result
    });

    return res.json({ message: "File uploaded and data saved!", status: true, doc });

  } catch (error) {
    console.log(error);
    next(error); 
  }
};
