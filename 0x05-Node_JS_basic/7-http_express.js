const express = require('express');
const fs = require('fs');
// const { countStudents } = require('./3-read_file_async');

// Create an Express application
const app = express();

// Define a route handler for the root URL '/'
app.get('/', (req, res) => {
  // Send the response with "Hello Holberton School!" in the page body
  res.send('Hello Holberton School!');
});

// Define a route handler for the '/students' URL path
app.get('/students', (req, res) => {
  // Read the database file asynchronously
  const dbPath = 'database.csv';
  fs.readFile(dbPath, 'utf-8', (err, data) => {
    if (err) {
      // If an error occurs while reading the file, send a 500 Internal Server Error response
      res.status(500).send('Internal Server Error');
      return;
    }

    // Parse the CSV data to extract student information
    const students = [];
    const lines = data.trim().split('\n');
    for (const line of lines) {
      const [firstName, lastName, age, field] = line.trim().split(',');
      if (firstName && lastName && age && field) {
        students.push({ firstName, lastName, age, field });
      }
    }

    // Prepare the response body
    let responseBody = 'This is the list of our students\n';
    for (const student of students) {
      responseBody += `${student.firstName}, ${student.lastName}, ${student.age}, ${student.field}\n`;
    }

    // Send the response with the list of students
    res.send(responseBody);
  });
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the Express application
module.exports = app;
