const mongoose = require('mongoose')

// Schema for the Recipes I will be adding. the 'user' field is typed Schema
// To get the user info from the userSchema in /userModel.js
const recipeSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
		title: {
			type: String,
			required: [true, 'Please add a title']
		},
		temp: {
			type: Number,
			required: false
		},
		time: {
			type: Number,
			required: [true, 'Please add an estimated cooking time']
		},
		ingredients: {
			type: Array,
			required: false
		},
		steps: {
			type: Array,
			required: false
		},
		uploader: {
			type: String,
			required: false
		},
		imgpath: {
			type: String,
			required: false
		},
		rating: {
			type: Number,
			required: false
		}
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Recipe', recipeSchema)
