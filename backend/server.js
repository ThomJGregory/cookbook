const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000; // Port for the Server to run on (or 5000)

// Initialize express
const app = express();

// API Routes
app.get('/api/recipes', (req, res) => {
	res.send('List recipes here...');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
