// 1. An electricity board charges the following rates to domestic users to discourage large consumption of energy For the first 100 units 60P per unit For the next 200 units 80P per unit Beyond 300 units 90P per unit All users are charged a minimum of Rs. 50. If the total amount is more than 300.00 then an additional surcharge of 15% is added.

// let unitsConsumed = Number(prompt("Enter the number of units consumed: "));
// let amount = 50;

// if (unitsConsumed <= 100) {
//     amount += unitsConsumed * 0.60;
// } else if (unitsConsumed <= 300) {
//     amount += 100 * 0.60 + (unitsConsumed - 100) * 0.80;
// } else {
//     amount += 100 * 0.60 + 200 * 0.80 + (unitsConsumed - 300) * 0.90;
// }

// let surcharge = 0;
// if (amount > 300) {
//     surcharge = amount * 0.15;
//     amount += surcharge;
// }

// alert(`Surcharge: Rs. ${surcharge.toFixed(2)}\nTotal Bill: Rs. ${amount.toFixed(2)}`);

//--------------------------------------------------------------------------------------------------------------------------------------

// 2. C program to check whether a person is eligible for voting or not? 

// let age = prompt("Enter Your Age");
// let message;

// if (age > 0 && age < 18) {
//     message = "You are not eligible to vote....";
// } else if (age <= 0 || isNaN(age)) {
//     message = "Please enter a valid age number";
// } else {
//     message = "You can vote....";
// }

// alert(message);

//--------------------------------------------------------------------------------------------------------------------------------------

/*

3. Write a C program to accept the basic salary of an employee from the user.
Calculate the gross salary on the following basis:
Basic               HRA                 DA
Up to 5000          8 %                 20 %
5000 to 10000       12 %                30 %
10000 to 15000      15 %                40 %
15000 above         20 %                50 %

*/

// let basicSalary = Number(prompt("Enter the basic salary of the employee: "));
// let hra, da;

// if (basicSalary <= 5000) {
//     hra = basicSalary * 0.08;
//     da = basicSalary * 0.20;
// } else if (basicSalary <= 10000) {
//     hra = basicSalary * 0.12;
//     da = basicSalary * 0.30;
// } else if (basicSalary <= 15000) {
//     hra = basicSalary * 0.15;
//     da = basicSalary * 0.40;
// } else {
//     hra = basicSalary * 0.20;
//     da = basicSalary * 0.50;
// }

// let grossSalary = basicSalary + hra + da;

// alert(`Basic Salary: Rs. ${basicSalary.toFixed(2)}
// HRA: Rs. ${hra.toFixed(2)}
// DA: Rs. ${da.toFixed(2)}
// Gross Salary: Rs. ${grossSalary.toFixed(2)}`);

//-------------------------------------------------------------------------------------------------------------------------------------

/*

4. Compute taxes for a given income with tax slab rates as follows... 
a. slab 1... 0-2500: 0% 
b. slab 2... 2500-5000: 10% 
c. slab 3... 5000-10000: 20% 
d. slab 4... 10000+: 30% 
(for each range of a given income, the tax rate is different) e.g. input: x = 5200 divisions are 0-2500, 2500-5000, 5000-5200 calculation: 0-2500 of x: 0% of 2500 = 0 2500-5000 of x: 10% of 2500 250 5000-1000 of x: 20% of 200 = 40 output: 290

*/

// let income = Number(prompt("Enter your income: "));
// let tax = 0;

// if (income > 10000) {
//     tax += (income - 10000) * 0.30;
//     income = 10000;
// }
// if (income > 5000) {
//     tax += (income - 5000) * 0.20;
//     income = 5000;
// }
// if (income > 2500) {
//     tax += (income - 2500) * 0.10;
//     income = 2500;
// }

// alert(`The total tax for your income is: Rs. ${tax.toFixed(2)}`);

// ------------------------------------------------------------------------------------------------------------------------------------

/*

5. Write a program to evaluate the Total, Percentage, Grade of a student for the 
following constraints: 
a. If marks > 75 - grade A 
b. If 60 < marks < 75 – grade B 
c. If 45 < marks<60 – grade C 
d. If 35 marks<45 - grade D 
e. If marks < 35 - Fail 

*/

let totalMarks = 0, subjects = 5;

for (let i = 1; i <= subjects; i++) {
    let marks;
    do {
        marks = Number(prompt(`Enter marks for subject ${i} (out of 100): `));
        if (marks < 0 || marks > 100) alert("Invalid input! Marks should be between 0 and 100.");
    } while (marks < 0 || marks > 100);
    totalMarks += marks;
}

let percentage = totalMarks / subjects;
let grade = 
    percentage > 75 ? "A" : 
    percentage > 60 ? "B" : 
    percentage > 45 ? "C" : 
    percentage > 35 ? "D" : "Fail";

alert(`Total Marks: ${totalMarks}
Percentage: ${percentage.toFixed(2)}%
Grade: ${grade}`);


// ---------------------------------------------------------------------------------------------------------------------------------

/*

6. Declare two variables x and y. Assign values to these variables. Number x
should be printed only if it is less than 2000 or greater than 3000, and number y should be printed only if it is between 100 and 500.

*/

// let x = 2500;
// let y = 300;

// if (x < 2000 || x > 3000) {
//     alert(`Value of x: ${x}`);
// }

// if (y > 100 && y < 500) {
//     alert(`Value of y: ${y}`);
// }