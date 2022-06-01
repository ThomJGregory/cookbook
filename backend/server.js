const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000; // Port for the Server to run on (or 5000)

// Initialize express
const app = express();

app.use('/api/recipes', require('./routes/recipeRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
