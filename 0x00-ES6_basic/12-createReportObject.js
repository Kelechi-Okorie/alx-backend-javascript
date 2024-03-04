export default function createReportObject(employeesList) {
  const result = {
    allEmployees: {},
    getNumberOfDepartments(departments) {
      let num = 0;

      for (const [,] of Object.entries(departments)) {
        num += num;
      }

      return num;
    },
  };

  for (const [key, value] of Object.entries(employeesList)) {
    result.allEmployees[key] = value;
  }

  return result;
}
