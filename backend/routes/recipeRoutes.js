// bring in express, create a router
const express = require('express')
router = express.Router()
const protect = require('../middleware/authMiddleware')

// Bring in the controller functions from the controller
const {
	getRecipes,
	addRecipe,
	updateRecipe,
	deleteRecipe
} = require('../controllers/recipeController')

// this is a succinct way of accomplishing two different methods to the same route with one line of code instead of two.
router.route('/').get(getRecipes).post(protect, addRecipe)
router.route('/:id').put(protect, updateRecipe).delete(protect, deleteRecipe)

module.exports = router
