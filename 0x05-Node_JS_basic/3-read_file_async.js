/* Read the number of valid data in the database. */

const fs = require('fs').promises;

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        const lines = data.toString().split('\n').slice(1, -1);
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
        return resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}
module.exports = countStudents;
