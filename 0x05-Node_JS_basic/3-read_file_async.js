const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // If an error occurs while reading the file, reject the promise with the error
        reject(new Error('Cannot load the database'));
        return;
      }

      // Parse the CSV data using csv-parser
      const students = [];
      const fields = {};
      data.trim().split('\n').forEach((row) => {
        const [firstName, lastName, age, field] = row.trim().split(',');
        if (firstName && lastName && age && field) {
          students.push({ firstName, lastName, age, field });
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }
      });

      // Count the number of students
      const numberOfStudents = students.length;

      // Log the number of students
      console.log(`Number of students: ${numberOfStudents}`);

      // Count the number of students in each field and log them
      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }

      // Resolve the promise with the result
      resolve();
    });
  });

}

module.exports = countStudents;
