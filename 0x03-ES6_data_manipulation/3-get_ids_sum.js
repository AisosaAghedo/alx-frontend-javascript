export default function getStudentIdsSum(students) {
  return students.reduce((result, value) => result + value.id, 0);
}
