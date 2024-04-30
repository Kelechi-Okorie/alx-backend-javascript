const http = require('http');
const fs = require('fs');
const { countStudents } = require('./3-read_file_async');

// Create a server
const app = http.createServer((req, res) => {
  // Parse the URL path
  const { url } = req;

  if (url === '/') {
    // If the URL path is '/', send 'Hello Holberton School!'
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    // If the URL path is '/students', display the list of students
    // Read the database file asynchronously
    const dbPath = 'database.csv';
    fs.readFile(dbPath, 'utf-8', (err, data) => {
      if (err) {
        // If an error occurs while reading the file, send a 500 Internal Server Error response
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error\n');
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

      // Send the response
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(responseBody);
    });
  } else {
    // If the URL path is not recognized, send a 404 Not Found response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the server instance
module.exports = app;
