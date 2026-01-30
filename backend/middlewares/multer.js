const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('../cloudConfig')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const isPdf = file.mimetype === "application/pdf"

    return {
      folder: "social_media_content_analyzer",
      resource_type: isPdf ? "raw" : "image",   
      type: "upload",                           
      allowed_formats: ["jpg", "jpeg", "png", "webp", "pdf"],
    }
  },
})

const upload = multer({ storage })

module.exports = upload
