// Question 1

const studentName: string = "Rahul";
const department: string = "Computer Science";

let tamil: number = 85;
let english: number = 78;
let mathematics: number = 92;
let science: number = 88;
let social: number = 76;

// BUG 1: Mathematics mark is missing-Fixed
let totalMarks: number =
    tamil +
    english +
    science +
    social+
    mathematics;

let average: number = totalMarks / 5; 
// BUG 2: Wrong divisor-Fixee

console.log("Student Name :", studentName);
console.log("Department :", department);
console.log("Total Marks :", totalMarks);
console.log("Average :", average);

// BUG 3: Wrong comparison operator-fixed
if (average >= 80 && totalMarks >= 400) {
    console.log("Grade : A");
} else {
    console.log("Grade : B");
}

// BUG 4: Average should increase, but decreased-Fixed
average = average +2;

console.log("Updated Average :", average);

// BUG 5: Wrong condition-Fixed
if (average >=90) {
    console.log("Outstanding Performance");
} else {
    console.log("Good Performance");
}

console.log("Assessment Completed");

// //Student Name : Rahul
// Department : Computer Science
// Total Marks : 419
// Average : 83.8
// Grade : A
// Updated Average : 85.8
// Good Performance
// Assessment Completed





