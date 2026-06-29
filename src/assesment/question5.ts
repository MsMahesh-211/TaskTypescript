// Question 5

//--------------------------------------------------
// Question 5 - High Level Debugging Challenge

//--------------------------------------------------
// Question 5 - Fill the Missing Code

const employeeName: string = "Alex";
const monthlyTarget: number = 60000;

const monthlySales: number[] = [
    12000,
    9000,
    18000,
    7000,
    15000,
    11000
];
let totalSales: number = 0;
let incentive: number = 0;
let penalty: number = 0;
let highSalesDays: number = 0;
let bestSales: number =0;
let commission: number = 0;

console.log("Employee Name :", employeeName);
console.log("--------------------------------");

for (let day = ______________________; day ______________________; day++) {

    console.log("Day :", day + 1);
    console.log("Sales :", ______________________);

    ________________________________;

    if (______________________________) {
        bestSales = monthlySales[day];
    }

    if (______________________________) {

        console.log("Excellent Sales");

        ________________________________;
        ________________________________;

    } else if (______________________________) {

        console.log("Good Sales");

        ________________________________;
        ________________________________;

    } else {

        console.log("Poor Sales");

        ________________________________;

    }

    console.log("--------------------------------");
}

commission = ________________________________;

const averageSales =
    ________________________________;

const finalSalary =
    ________________________________;

console.log("Total Sales :", totalSales);
console.log("Average Sales :", averageSales);
console.log("Highest Sales :", bestSales);
console.log("High Sales Days :", highSalesDays);
console.log("Incentive :", incentive);
console.log("Penalty :", penalty);
console.log("Commission :", commission);

if (
    ________________________________ &&
    ________________________________ &&
    ________________________________
) {

    console.log("Employee Rating : Outstanding");

} else if (
    ________________________________
) {

    console.log("Employee Rating : Excellent");

} else {

    console.log("Employee Rating : Needs Improvement");

}

console.log("Final Salary :", finalSalary);

console.log("Assessment Completed");


//Output 
// Employee Name : Alex
// --------------------------------
// Day : 1
// Sales : 12000
// Good Sales
// --------------------------------
// Day : 2
// Sales : 9000
// Poor Sales
// --------------------------------
// Day : 3
// Sales : 18000
// Excellent Sales
// --------------------------------
// Day : 4
// Sales : 7000
// Poor Sales
// --------------------------------
// Day : 5
// Sales : 15000
// Excellent Sales
// --------------------------------
// Day : 6
// Sales : 11000
// Good Sales
// --------------------------------
// Total Sales : 72000
// Average Sales : 12000
// Highest Sales : 18000
// High Sales Days : 4
// Incentive : 6000
// Penalty : 1000
// Commission : 3600
// Employee Rating : Excellent
// Final Salary : 38600
