const express = require('express');
router = express.Router();
const {
	getRecipes,
	addRecipe,
	updateRecipe,
	deleteRecipe
} = require('../controllers/recipeController');

// this is a succinct way of accomplishing two different methods to the same route with one line of code instead of two.
router.route('/').get(getRecipes).post(addRecipe);
router.route('/:id').put(updateRecipe).delete(deleteRecipe);

module.exports = router;
