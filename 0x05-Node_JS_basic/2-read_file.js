/* Read the number of valid data in the database. */

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').toString().split('\n');
    const lines = data.slice(1, data.length - 1);
    let countTotal = 0;
    const countFields = {};
    const lists = {};
    lines.forEach((line) => {
      const fields = line.split(',');
      const field = fields[fields.length - 1].trim();

      if (!countFields[field]) {
        countFields[field] = 0;
        lists[field] = [];
      }
      countTotal += 1;
      countFields[field] += 1;

      lists[field].push(fields[0].trim());
    });
    console.log(`Number of students: ${countTotal}`);

    for (const field in countFields) {
      if (field) console.log(`Number of students in ${field}: ${countFields[field]}. List: ${lists[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
