const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

// @desc   Register new user
// @route  POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
	// Here we take the name, email, password from the request body
	const { name, email, password } = req.body;

	// Check to make sure the name, email, and password exist and are not blank/null
	if (!name || !email || !password) {
		res.status(400);
		throw new Error('Please add all fields');
	}

	//Check if the User exists
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	// Hash password with bcrypt - takes in number of rounds 10 is default
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create user
	const user = await User.create({
		name,
		email,
		password: hashedPassword
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

// @desc   Authenticate a user
// @route  POST /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
	res.json({
		message: 'Login User'
	});
});

// @desc   Get user data
// @route  POST /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
	res.json({
		message: 'User data display'
	});
});

module.exports = {
	registerUser,
	loginUser,
	getMe
};
