const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root URL '/'
app.get('/', (req, res) => {
  // Send the response with "Hello Holberton School!" in the page body
  res.send('Hello Holberton School!');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the Express application
module.exports = app;
