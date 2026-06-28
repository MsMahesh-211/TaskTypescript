//--------------------------------------------------
// Question 2

let employeeName: string = "Alex";
let employeeId: number = 1001;
let department: string = "Software Testing";

let basicSalary: number = 25000;
let hra: number = 5000;
let bonus: number = 3000;
let tax: number = 2000;

// BUG 1: Bonus not added
let grossSalary: number = basicSalary + hra;

// BUG 2: Tax added instead of deducted
let netSalary: number = grossSalary + tax;

console.log("Employee Name :", employeeName);
console.log("Employee ID :", employeeId);
console.log("Department :", department);
console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Gross Salary :", grossSalary);
console.log("Net Salary :", netSalary);

// BUG 3: Wrong eligibility condition
if (netSalary <= 30000) {
    console.log("Promotion Status : Eligible");
} else {
    console.log("Promotion Status : Not Eligible");
}

// BUG 4: Wrong increment amount
netSalary = netSalary - 5000;

console.log("Salary After Increment :", netSalary);

// BUG 5: Wrong grade condition
if (netSalary < 35000) {
    console.log("Performance Grade : A");
} else {
    console.log("Performance Grade : B");
}

// BUG 6: Wrong experience value
let experience: number = -5;

console.log("Experience :", experience);

// BUG 7: Wrong experience check
if (experience > 10) {
    console.log("Senior Employee");
} else {
    console.log("Junior Employee");
}

// BUG 8: Wrong attendance percentage
let attendance: number = 120;

console.log("Attendance :", attendance);

// BUG 9: Invalid attendance condition
if (attendance >= 75) {
    console.log("Attendance Status : Fail");
} else {
    console.log("Attendance Status : Pass");
}

// BUG 10: Wrong final message
console.log("Employee Terminated Successfully");

//--------------------------------------------------