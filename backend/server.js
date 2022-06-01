// Bringing in our outside packages
const express = require('express');
const dotenv = require('dotenv').config();
// Bring in custom JSON error handler
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000; // Port for the Server to run on (or 5000)

// Initialize express
const app = express();

// Middleware to read JSON from requests and encoded url data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// The Recipe routes file will handle the web browser's navigation and make sure it points to the correct place
app.use('/api/recipes', require('./routes/recipeRoutes'));

// The alternate error handler I created in the middleware folder
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
