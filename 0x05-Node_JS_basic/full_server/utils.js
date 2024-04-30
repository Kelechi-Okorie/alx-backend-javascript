// full_server/utils.js

const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentsByField = {};
        const lines = data.trim().split('\n');
        for (const line of lines) {
          const [firstName, lastName, age, field] = line.trim().split(',');
          if (firstName && lastName && age && field) {
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstName);
          }
        }
        resolve(studentsByField);
      }
    });
  });
}

module.exports = { readDatabase };
