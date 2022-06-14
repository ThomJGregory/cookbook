// 3 Routes: Register, Login, Get users info
const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const {
	registerUser,
	getMe,
	loginUser
} = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe) // Add authorization middleware as second arg

module.exports = router
