const express = require("express")
const upload = require('../middlewares/multer')
const { userVerification } = require("../middlewares/authMiddleware")
const { uploadFile } = require("../controllers/uploadController")

const router = express.Router()

router.post('/upload', userVerification, upload.single('file'), uploadFile)

module.exports = router