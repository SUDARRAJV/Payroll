const employees = [
  { name: 'John Doe', salary: 50000 },
  { name: 'Jane Smith', salary: 60000 },
  { name: 'Bob Johnson', salary: 45000 },
];
function incrementPayroll(employees, percentage) {
  const updatedPayroll = employees.map((employee) => {
    const incrementAmount = (employee.salary * percentage) / 100;
    const updatedSalary = employee.salary + incrementAmount;

    return {
      ...employee,
      salary: updatedSalary,
    };
  });

  return updatedPayroll;
}
const incrementPercentage = 10;
const updatedEmployees = incrementPayroll(employees, incrementPercentage)
console.log('Updated Payroll:');
updatedEmployees.forEach((employee) => {
  console.log(`${employee.name}: $${employee.salary}`);
});
.
