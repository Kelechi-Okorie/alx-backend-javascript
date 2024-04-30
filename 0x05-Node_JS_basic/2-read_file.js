const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    // Parse the CSV data using csv-parser
    const students = [];
    data.trim().split('\n').forEach((row) => {
      const [firstName, lastName, age, field] = row.trim().split(',');
      if (firstName && lastName && age && field) {
        students.push({ firstName, lastName, age, field });
      }
    });

    // Count the number of students
    const numberOfStudents = students.length;

    // Log the number of students
    console.log(`Number of students: ${numberOfStudents}`);

    // Count the number of students in each field and log them
    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstName);
    });

    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (err) {
    // If an error occurs while reading the file, throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
