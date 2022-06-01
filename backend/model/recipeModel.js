const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema(
	{
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
);

module.exports = mongoose.model('Recipe', recipeSchema);
