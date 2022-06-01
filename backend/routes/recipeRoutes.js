const express = require('express');
router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json([
		{
			recipename: 'Cajun Shrimp Pasta',
			recipedescription: 'A creamy pasta i like to eat',
			oven: '',
			ingredients: [
				'Jumbo Shrimp',
				'Cajun Seasoning',
				'Pasta',
				'Olive Oil',
				'Garlic'
			],
			steps: [
				'Sautee Shrimp with Garlic and Olive Oil',
				'Add cajun seasoning and cream',
				'Boil Noodles',
				'Combine'
			]
		},
		{
			recipename: 'Dipping sauce',
			recipedescription: 'Sauce I use for my fries',
			oven: '',
			ingredients: [
				'Mayonaisse',
				'Ketchup',
				'Mustard',
				'Onion Powder',
				'Garlic Powder',
				'Paprika',
				'Worchestire',
				'Pickle Juice'
			],
			steps: ['Combine ingredients']
		}
	]);
});

router.post('/', (req, res) => {
	res.status(200).json({ message: 'reciperoute add recipe' });
});

router.put('/:id', (req, res) => {
	res.status(200).json({ message: `Update recipe ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
	res.status(200).json({ message: `Delete recipe ${req.params.id}` });
});

module.exports = router;
