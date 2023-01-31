export default function updateStudentGradeByCity(students, city, newGrades) {
  const result = [];
  const filtered = students.filter((student) => student.location === city).map((el) => {
    const foundItem = newGrades.find((ng) => ng.studentId === el.id);
    if (foundItem) result.push({ ...el, grade: foundItem.grade });
    else result.push({ ...el, grade: 'N/A' });
  });
  return result;
}
