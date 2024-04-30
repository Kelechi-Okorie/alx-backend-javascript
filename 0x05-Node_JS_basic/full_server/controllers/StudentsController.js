// full_server/controllers/StudentsController.js

const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase('database.csv');
      let responseBody = 'This is the list of our students\n';
      Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach(field => {
        responseBody += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
      });
      res.status(200).send(responseBody);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const studentsByField = await readDatabase('database.csv');
      let responseBody = `List of students in the field ${major}\n`;
      if (studentsByField[major]) {
        responseBody += `List: ${studentsByField[major].join(', ')}\n`;
      } else {
        responseBody += 'No students found in this field\n';
      }
      res.status(200).send(responseBody);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
