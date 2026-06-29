// Question 3
// Fill in the Missing Code

const companyName: string = "OpenAI";
const employeeId: number = 101;
const basicSalary: number = 28000;
const hra: number = 4000;
const medicalAllowance: number = 2000;

// Missing Line 1-Fixed;
const grossSalary: number = basicSalary+hra+medicalAllowance;

console.log("Company Name :", companyName);
console.log("Employee ID :", employeeId);
console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Medical Allowance :", medicalAllowance);
console.log("Gross Salary :", grossSalary);

// Missing Line 2-Fixed
if (grossSalary<=30000) {
    console.log("Salary Grade : A");
} else {
    console.log("Salary Grade : B");
}

// Missing Line 3-Fixed
const employee = {
    id: 101,
    name: "Alex",
    salary: 34000
};

console.log("Employee ID :", employee.id);
console.log("Employee Name :", employee.name);
console.log("Current Salary :", employee.salary);

// Missing Line 4-Fixed
const UpdatedSalary = grossSalary + 5000;

console.log("Updated Salary :", employee.salary);

// Missing Line 5-Fixed
const annualSalary = grossSalary * 12;

console.log("Annual Salary :", annualSalary);

// Missing Line 6-Fixed
if(grossSalary>=40000) {
    console.log("Bonus : Eligible");
} else {
    console.log("Bonus : Not Eligible");
}

// Missing Line 7-Fixed
const tax = 1000;

console.log("Tax Amount :", tax);

// Missing Line 8-Fixed
const netSalary = grossSalary - tax;

console.log("Net Salary :", netSalary);

// Missing Line 9
if (netSalary>=40000) {
    console.log("Performance Rating : Excellent");
} else {
    console.log("Performance Rating : Good");
}

// Missing Line 10 -Fixed
console.log("Final Employee Salary:",netSalary);

console.log("Interview Completed");

// Company Name : OpenAI
// Employee ID : 101
// Basic Salary : 28000
// HRA : 4000
// Medical Allowance : 2000
// Gross Salary : 34000
// Salary Grade : B
// Employee ID : 101
// Employee Name : Alex
// Current Salary : 34000
// Updated Salary : 34000
// Annual Salary : 408000
// Bonus : Not Eligible
// Tax Amount : 1000
// Net Salary : 33000
// Performance Rating : Good
// Final Employee Salary: 33000
// Interview Completed