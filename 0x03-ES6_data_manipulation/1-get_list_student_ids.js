export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  return studentsList.map((student, index) => {
    return student.id;
  });
}
