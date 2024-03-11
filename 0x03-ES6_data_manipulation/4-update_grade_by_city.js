export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const students = studentsList.filter((student) => student.location === city);

  return students.map((student) => {
    const found = newGrades.find((grade) => grade.studentId === student.id);

    if (!found) {
      return { ...student, grade: 'N/A' };
    }

    return { ...student, grade: found.grade };
  });
}
