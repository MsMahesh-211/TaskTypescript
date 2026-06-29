//--------------------------------------------------
// Question 4

// Question 4 - Find and Fix the Bugs

const employeeName: string = "Alex";
let totalSalary: number = 30000;
let completedTasks: number = 0;
let totalBonus: number = 0;
const workingDays: number = 5;

console.log("EmployeeName :", employeeName); //Fixed

for (let day = 1; day <= workingDays; day++) {

    console.log("-------------------------");
    console.log("Working Day :", day);
} //Fixed

    // BUG 1: Tasks are decreased instead of increased
    completedTasks = completedTasks + 2;

    console.log("Completed Tasks :", completedTasks);

    // BUG 2: Wrong condition-Fixed
    if (completedTasks > 6) {

        // BUG 3: Wrong bonus amount-Fixed
        totalBonus = totalBonus + 1000;

        console.log("Daily Bonus : 1000");

    } else {

        // BUG 4: Wrong bonus calculation-Fixed
        totalBonus = totalBonus + 500;

        console.log("Daily Bonus : 500");

    }


console.log("-------------------------");
console.log("Total Bonus :", totalBonus);

// BUG 5: Bonus deducted instead of added-fixed
totalSalary = totalSalary + totalBonus;

console.log("Updated Salary :", totalSalary);

// BUG 6: Wrong logical operator-fixed
if (
    totalSalary >= 35000 &&
    completedTasks >= 10
) {

    console.log("Performance : Excellent");

} else {

    console.log("Performance : Good");

}

// BUG 7: Incorrect final message-fixed
console.log("Interview Passed");



//--------------------------------------------------

// EmployeeName : Alex
// -------------------------
// Working Day : 1
// -------------------------
// Working Day : 2
// -------------------------
// Working Day : 3
// -------------------------
// Working Day : 4
// -------------------------
// Working Day : 5
// Completed Tasks : 2
// Daily Bonus : 500
// -------------------------
// Total Bonus : 500
// Updated Salary : 30500
// Performance : Good
// Interview Passed