const { Signup, Login, Logout } = require("../controllers/authController")
const express = require("express")
const { userVerification } = require("../middlewares/authMiddleware")
const router = express.Router()

router.post("/signup", Signup)
router.post("/login", Login)
router.post("/logout", Logout)

module.exports = router