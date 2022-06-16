// Easier way to handle Promises, instead of try-catch just wrap each function with asyncHandler
const asyncHandler = require('express-async-handler')

const Recipe = require('../model/recipeModel')
const User = require('../model/userModel')

// @desc Get recipes
// @route GET /api/recipes
// @access Private
const getRecipes = asyncHandler(async (req, res) => {
	const recipes = await Recipe.find()
	res.status(200).json(recipes)
})

// @desc add a recipe
// @route POST /api/recipes
// @access Private
const addRecipe = asyncHandler(async (req, res) => {
	if (!req.body.title) {
		res.status(400)
		// This is sent as HTML unless changed in /middleware/
		throw new Error('Please add text')
	}

	const recipe = await Recipe.create({
		title: req.body.title,
		temp: req.body.temp,
		time: req.body.time,
		ingredients: req.body.ingredients,
		steps: req.body.steps,
		imgpath: req.body.imgpath,
		rating: req.body.rating,
		user: req.user.id
	})
	res.status(200).json(recipe)
})

// @desc Edit/Update recipes
// @route PUT /api/recipes/:id
// @access Private
const updateRecipe = asyncHandler(async (req, res) => {
	const recipe = await Recipe.findById(req.params.id)

	if (!recipe) {
		res.status(400)
		throw new Error('Recipe not found...')
	}

	const user = await User.findById(req.user.id)

	// Check for user
	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	// Make sure the logged in user matches the recipe's user
	if (recipe.user.toString() !== user.id) {
		res.status(401)
		throw new Error('You cannot update this Recipe')
	}

	const updatedRecipe = await Recipe.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	)

	res.status(200).json(updatedRecipe)
})

// @desc Delete recipes
// @route DELETE /api/recipes/:id
// @access Private
const deleteRecipe = asyncHandler(async (req, res) => {
	const recipe = await Recipe.findById(req.params.id)

	if (!recipe) {
		res.status(400)
		throw new Error('Recipe not found...')
	}

	const user = await User.findById(req.user.id)

	// Check for user
	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	// Make sure the logged in user matches the recipe's user
	if (recipe.user.toString() !== user.id) {
		res.status(401)
		throw new Error('You cannot delete this Recipe')
	}

	await Recipe.findByIdAndRemove(req.params.id)
	res.status(200).json({ id: req.params.id })
})

module.exports = {
	getRecipes,
	addRecipe,
	updateRecipe,
	deleteRecipe
}
