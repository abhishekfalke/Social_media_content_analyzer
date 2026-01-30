const express = require('express')
const { userVerification } = require('../middlewares/authMiddleware')
const { getDashboardData } = require('../controllers/dashboardController')

const router = express.Router()

router.get('/', userVerification, getDashboardData)

module.exports = router