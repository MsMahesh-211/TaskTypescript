//--------------------------------------------------
// Question 4

// Question 4 - Find and Fix the Bugs

const employeeName: string = "Alex";
let totalSalary: number = 30000;
let completedTasks: number = 0;
let totalBonus: number = 0;
const workingDays: number = 5;

console.log("Employee :", employeeName);

for (let day = 1; day <= workingDays; day++) {

    console.log("-------------------------");
    console.log("Working Day :", day);

    // BUG 1: Tasks are decreased instead of increased
    completedTasks = completedTasks - 2;

    console.log("Completed Tasks :", completedTasks);

    // BUG 2: Wrong condition
    if (completedTasks <= 6) {

        // BUG 3: Wrong bonus amount
        totalBonus = totalBonus + 500;

        console.log("Daily Bonus : 1000");

    } else {

        // BUG 4: Wrong bonus calculation
        totalBonus = totalBonus + 1500;

        console.log("Daily Bonus : 500");

    }
}

console.log("-------------------------");
console.log("Total Bonus :", totalBonus);

// BUG 5: Bonus deducted instead of added
totalSalary = totalSalary - totalBonus;

console.log("Updated Salary :", totalSalary);

// BUG 6: Wrong logical operator
if (
    totalSalary >= 35000 ||
    completedTasks >= 10
) {

    console.log("Performance : Excellent");

} else {

    console.log("Performance : Good");

}

// BUG 7: Incorrect final message
console.log("Interview Failed");



//--------------------------------------------------