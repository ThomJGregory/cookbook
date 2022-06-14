// Custom middleware that will check the error code and return JSON instead of HTML
const errorHandler = (err, req, res, next) => {
	// Check if the status code exists from client(400), if not set the code to a server error (500)
	const statusCode = res.status ? res.statusCode : 500

	// Set the status code, respond with JSON instead of HTML
	res.status(statusCode)
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack // pass through the stack trace if we're in development mode, not production mode
	})
}

module.exports = {
	errorHandler
}
