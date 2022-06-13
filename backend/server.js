// Bringing in our outside packages
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
// Bring in custom JSON error handler
const { errorHandler } = require('./middleware/errorMiddleware');

// Connect to the database we set up in /config/db with the Mongo URI we have stored in .env
const connectDB = require('./config/db');
connectDB();

const port = process.env.PORT || 5000; // Port for the Server to run on (or 5000)

// Initialize express
const app = express();

// Middleware to read JSON from requests and encoded url data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// The Recipe routes file will handle the web browser's navigation and make sure it points to the correct place
app.use('/api/recipes', require('./routes/recipeRoutes'));

// This points to the userRoutes.js file to handle any endpoints necessary for User authentication
app.use('/api/users', require('./routes/userRoutes'));

// The alternate error handler I created in the middleware folder
app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server started on port ${port}`.blue.underline)
);
