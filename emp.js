const employees = [
    {
        empId: 101,
        empName: "John Doe",
        empCompany: "Tech Corp",
        empSalary: 75000,
        empAddress: { empCity: "New York", empArea: "Manhattan" }
    },
    {
        empId: 102,
        empName: "Jane Smith",
        empCompany: "Innovate Ltd",
        empSalary: 68000,
        empAddress: { empCity: "Los Angeles", empArea: "Beverly Hills" }
    },
    {
        empId: 103,
        empName: "Alice Johnson",
        empCompany: "Soft Solutions",
        empSalary: 72000,
        empAddress: { empCity: "San Francisco", empArea: "Downtown" }
    }
];
function logEmployeeTable(data) {
    console.table(
        data.map(emp => ({
            "Emp ID": emp.empId,
            "Name": emp.empName,
            "Company": emp.empCompany,
            "Salary": emp.empSalary,
            "City": emp.empAddress.empCity,
            "Area": emp.empAddress.empArea
        }))
    );
}

logEmployeeTable(employees);