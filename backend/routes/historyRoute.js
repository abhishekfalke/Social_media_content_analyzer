const express = require("express")
const { userVerification } = require("../middlewares/authMiddleware")
const { getHistory } = require("../controllers/historyController")

const router = express.Router()

router.get('/history', userVerification, getHistory)

module.exports = router