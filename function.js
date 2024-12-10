/*
    FUNCTION :-  Block of Code That Performs a Specific Task, Can be Invoked Whenever Needed.
     
    Function Syntax  => 
    
        function function_name(){
            Statement...
        }
        function_name(); // Call he Function   
    
*/

// Example => Two var sum , mul.

// function add() {
//     let a = 10, b = 20;
//     console.log("Addition of a and b is :", a + b);
// }
// add();

// function mul() {
//     let a = 10, b = 20;
//     console.log("Multiplication of a and b is :", a * b);
// }
// mul(); 




// Operators Program Convert Into Function.


// 1. Convert Doller into Rupess...

function dollerTorupess() {
    let dollar = prompt("Enter How Much Dollar Convert into Rupess.");
    let rupee = dollar * 84.28;
    console.log(dollar, "Dollar Is Equal To ₹" + rupee, "Rupess.");
}

dollerTorupess();

// -------------------------------------------------------------------------------------------------

// 2. Convert Feet into Inches...

function feetToinches() {
    let feet = prompt("Enter How Much Feet Convert into Inches.");
    let inches = feet * 12;
    console.log(feet, "Feet Is Equal To", inches, "Inches.");
}

feetToinches();

// -------------------------------------------------------------------------------------------------

// 3. Convert Celsius into Fahrenheit...

function celsiusTofahrenheit() {
    let celsius = prompt("Given Temperature in Celsius to Converts into Fahrenheit.");
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(celsius, "Celsius Is Equal To", fahrenheit, "Fahrenheit.");
}

celsiusTofahrenheit();

// -------------------------------------------------------------------------------------------------

// 4.  Convert Centimeters into Meters...

function centimetersTometer() {
    let centimeters = prompt("Given Length in Centimeters to Convert into meters.");
    let meters = centimeters / 100;
    console.log(centimeters, "Centimeters Is Equal To", meters, "Meters.");
}

centimetersTometer();

// -------------------------------------------------------------------------------------------------


// 5. Find Out Area Of Triangle...

function areaTriangle() {
    let base = prompt("Enter Base of Triangle...");
    let height = prompt("Enter height of Triangle...");
    let triangle = 1 / 2 * base * height;

    console.log("The Area of Triangle is :", triangle);
}

areaTriangle();

// -------------------------------------------------------------------------------------------------

// 6. Find Out Area Of Circle...

function areaCircle() {
    let pi = 3.14;
    let radius = prompt("Enter Radius of Circle...");
    let circle = pi * (radius ** 2);

    console.log("The Area of Circle is :", circle);
}

areaCircle();

// -------------------------------------------------------------------------------------------------

// 7. Find Out Area Of Rectangle...

function areaRectangle() {
    let length = prompt("Enter Length of Rectangle...");
    let width = prompt("Enter Width of Rectangle...");
    let rectangle = length * width;

    console.log("The Area of Rectangle is :", rectangle);
}

areaRectangle();

// -------------------------------------------------------------------------------------------------

// 8. Find Out Simple Interest...

function simpleInterest() {
    let principal = prompt("Enter the principal amount :");
    let rate = prompt("Enter the rate of interest (in percentage) :");
    let time = prompt("Enter the time period (in years) :");

    let interest = (principal * rate * time) / 100;

    console.log("Simple Interest :", interest);
}

simpleInterest();

// -------------------------------------------------------------------------------------------------


// 9. Find Out Final Salary Employee (basic, HRA(12%), DA(18%)).

function finalSalary() {
    let baseSalary = +prompt("Enter the basic salary of the employee:");
    baseSalary = parseFloat(baseSalary);
    let HRA = (baseSalary * 12) / 100;
    let DA = (baseSalary * 18) / 100;
    let finalSalary = baseSalary + HRA + DA;

    console.log("The final salary of the employee is :", finalSalary);
}

finalSalary();

// ----------------------------------------------------------------------------------------------------------------------------



// Condition Statement Program Convert Into Function.

/*
    10. An electricity board charges the following rates to domestic users
    to discourage large comsumption of energy for the first 100 units 60p
    per unit for the next 200 units 80p per unit for the next 300 units 90p 
    per unit All users are charged a minimun of Rs.50. if the total amount
    is more than 300.00 then an additional surcharge of 15% is added.

    i)   0 - 100 = 60p     
    ii)  100 - 300 = 80p
    iii) 300+  = 90p

*/

function electricityBill() {
    let unit = Number(prompt("Enter Electricity Consumption in Units:"));
    let bill = 0;

    if (unit >= 0 && unit <= 100) {
        bill = unit * 0.60;
    } else {
        if (unit <= 300) {
            bill = (100 * 0.60) + ((unit - 100) * 0.80);
        }
        else if (unit >= 300) {
            bill = (100 * 0.60) + (200 * 0.80) + ((unit - 300) * 0.90);
        }
        else {
            console.log("Invalid input. Please enter a positive number for units.");
        }
        bill = Math.max(bill, 50);
    }

    if (bill > 300) {
        bill += (bill * 0.15);
    }

    console.log("Total Electricity Bill : ₹" + bill);

}

electricityBill();

// -------------------------------------------------------------------------------------------------

// 11. Javascript program to check whether a person is eligible for voting or not?

function votingEligible() {
    let age = +prompt("Enter Your Age :");

    if (age < 18 && age >= 0) {
        console.log("You Can't Eligible For Vote :", age);
    }

    else if (age >= 18) {
        console.log("You Can Eligible For Vote :", age);
    }
    else {
        console.log("Invalid Input. Please Enter a Positive Number :", age);
    }
}

votingEligible();

// -------------------------------------------------------------------------------------------------

/*
    12. Write a C program to accept the basic salary of an employee from the user.
Calculate the gross salary on the following basis:

Basic           HRA      DA

Up to 5000      8%       20%
5000 to 10000   12%      30%
10000 to 15000  15%      40%
15000 above     20%      50%

*/

function ctcCalculate() {
    let baseSalary = +prompt("Enter Your Base Salary :"), grossSalary;
    let HRA = +prompt("Enter Your HRA :");
    let DA = +prompt("Enter Your DA :");

    HRA = (baseSalary * HRA) / 100;
    DA = (baseSalary * DA) / 100;

    if (0 >= baseSalary && 5000 <= baseSalary) {
        grossSalary = baseSalary + HRA + DA;
    }
    else if (5000 < baseSalary && 10000 >= baseSalary) {
        grossSalary = baseSalary + HRA + DA;
    }
    else if (10000 < baseSalary && 15000 >= baseSalary) {
        grossSalary = baseSalary + HRA + DA;
    }
    else if (15000 < baseSalary) {
        grossSalary = baseSalary + HRA + DA;
    }
    else {
        console.log("Invalid Input. Please Enter a Positive Number");
    }

    console.log("Your Gross Salary is : ₹" + grossSalary);
}

ctcCalculate();

// -------------------------------------------------------------------------------------------------

/*
    13. Compute taxes for a given income with tax slab rates as follows...

    a. slab 1... 0-2500: 0%
    b. slab 2... 2500-5000: 10%
    c. slab 3... 5000-10000: 20%
    d. slab 4... 10000+: 30%

    (for each range of a given income, the tax rate is different)
    e.g. input: x = 5200 divisions are 0-2500, 2500-5000, 5000-5200
    calculation: 0-2500 of x: 0% of 2500 = 0 2500-5000 of x: 10% of 2500 250 5000-1000 of x: 20% of 200 = 40 output: 290

*/

function taxCalculate() {

    let slab = +prompt("Enter Your Slab :");
    let taxCount = 0;

    if (slab > 0 && slab < 2500) {
        taxCount += (slab * 0);
    }
    else if (slab >= 2500 && slab < 5000) {
        taxCount += (slab - 2500) * 0.10;
    }
    else if (slab >= 5000 && slab <= 10000) {
        taxCount += (slab - 5000) * 0.20;
        taxCount += 2500 * 0.10;
    }
    else if (slab >= 10000) {
        taxCount += (slab - 10000) * 0.30;
        taxCount += 5000 * 0.20;
        taxCount += 2500 * 0.10;
    }
    else {
        console.log("Invalid Input. Please Enter a Positive Number");
    }

    console.log("Total Tax : ₹", taxCount);
}

taxCalculate();

// -------------------------------------------------------------------------------------------------

/*
    14. Write a program to evaluate the Total, Percentage, Grade of a student for the following constraints:

    a. If marks > 75 - grade A
    b. If 60 < marks < 75 – grade B
    c. If 45 < marks<60 – grade C
    d. If 35 marks<45 - grade D
    e. If marks < 35 - Fail

*/
function gradeCalculate() {

    let marks = prompt("Enter Your Marks :");

    if (marks > 75 && marks <= 100) {
        console.log("Your Grade is A.")
    } else if (marks > 60 && marks <= 75) {
        console.log("Your Grade is B.")
    } else if (marks > 45 && marks <= 60) {
        console.log("Your Grade is C.")
    } else if (marks > 35 && marks <= 45) {
        console.log("Your Grade is D.")
    } else if (marks <= 35) {
        console.log("Sorry!! Are You Fail, Better Luck For Next Time.")
    }
    else {
        console.log("Invalid Input. Please Enter a Positive Number.");
    }
}

gradeCalculate();

// -------------------------------------------------------------------------------------------------

/*
    15. Declare two variables x and y. Assign values to these variables. Number x
    should be printed only if it is less than 2000 or greater than 3000, and number
    y should be printed only if it is between 100 and 500.
*/

function assignValue() {
    let x = 500, y = 200;

    if (x < 2000 || x > 3000) {
        console.log("The Value of x is:", x);
    } else if (y >= 100 && y <= 500) {
        console.log("The Value of y is:", y);
    } else {
        console.log("Invalid Input. Please Enter a Positive Number.");
    }
}

assignValue();

// --------------------------------------------------------------------------------------------------------------------------------

//Loop Program Convert Into Function.

// 16. Print Out 10 to 1.

function revNum() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}
revNum();

// -------------------------------------------------------------------------------------------------


// 17. Print Out 51 to 79.

function printNum() {
    for (let i = 51; i <= 79; i++) {
        console.log(i);
    }
}
printNum();

// -------------------------------------------------------------------------------------------------


// 18. Enter n and print out 1 to n.

function numPrintRandomNum() {
    let i = +prompt("Enter n Number :");
    let n;
    for (i = 1; i <= n; i++) {
        console.log(i);
    }
}
numPrintRandomNum();

// -------------------------------------------------------------------------------------------------


// 19. Enter n and print out -n to 1.

function randomNumPrintNum() {
    let n = +prompt("Enter n Number :");
    for (let i = -n; i <= 1; i++) {
        console.log(i);
    }
}
randomNumPrintNum();

// -------------------------------------------------------------------------------------------------


// 20. Enter n and print out -n to n.

function randomNumToRandomNum() {
    let a = +prompt("Enter a Number :");
    for (let i = -a; i <= a; i++) {
        console.log(i);
    }
}
randomNumToRandomNum();

// -------------------------------------------------------------------------------------------------


// 21. Enter n and print out odd num upto n.

function oddnumTorandomnum() {
    let b = +prompt("Enter a Number :");
    for (let i = 1; i <= b; i += 2) {
        console.log(i);
    }
}
oddnumTorandomnum();

// -------------------------------------------------------------------------------------------------


// 22. Enter n and print out even num upto n.

function evenNumToRandomNum() {
    let c = +prompt("Enter a Number :");
    for (let i = 0; i <= c; i += 2) {
        console.log(i);
    }
}
evenNumToRandomNum();

// -------------------------------------------------------------------------------------------------


// 23. series print out 1, 4, 3, 16, 5, .....customSeries

function seriesPrint() {
    let d = +prompt("Enter a Number :");
    for (let i = 0; i <= d; i++) {
        if (i % 2 == 1) {
            console.log(i);
            i++;
            console.log(i ** 2);
        }
    }
}
seriesPrint();

// -------------------------------------------------------------------------------------------------


// 24. series print out 1, 1, 2, 3, 5, 8 .....fibonacciSeries

function printFibonacci() {
    let e = +prompt("Enter a Number :");
    let x = 0; y = 1;
    let z;

    //Method : 1
    for (let i = 0; i <= e; i++) {
        console.log(x);

        z = x + y;
        x = y;
        y = z;
    }


    //Method : 2
    for (let i = 1; i <= e; i++) {
        if (i == 1) {
            console.log(x);
        } else if (i == 2) {
            console.log(y);
        } else {
            z = x + y;
            x = y;
            y = z;
            console.log(z);
        }
    }
}
printFibonacci();

// -------------------------------------------------------------------------------------------------


// 25. series print out 1, 4, 12, 32, .....GeometricSeries

function printGeometricSeries() {
    let f = +prompt("Enter a Number :");
    let g = 2, h = 0, a = 1;

    //Method : 1

    for (let i = 1; i <= f; i++) {
        console.log(i * (g ** h));
        h++;
    }


    // Method : 2

    for (i = 1; i <= f; i++) {
        console.log(a * i);
        a *= 2;
    }

}

// -------------------------------------------------------------------------------------------------

// 26. Find Out Factorial of Given Number.

function factorial() {
    let j = +prompt("Enter a Number :");
    let k = 1;

    for (let i = 1; i <= j; i++) {
        if (j < 0) {
            console.log('Error! Factorial for negative number does not exist.');
        }
        else if (j === 0) {
            console.log("The Factorial Number is : 1")
        }
        else {
            k *= i;
            console.log(k);
        }
    }
}
factorial();

// -------------------------------------------------------------------------------------------------


// 27. Enter n and Print Out Total Number's of Sum.

function totalnumSum() {
    let l = +prompt("Enter a Number :");
    let sum = 0;

    for (let i = 1; i <= l; i++) {
        if (l > 0) {
            sum += i;
            console.log("The sum of numbers from 1 to " + i + " is : " + sum);
        }
        else {
            console.log("Error! Please Enter a Positive Number.");
        }
    }
}
totalnumSum();

// -------------------------------------------------------------------------------------------------


// 28. Enter n and Print Out Total Odd Number's Sum.

function totalOddnumSum() {
    let m = +prompt("Enter a Number :");
    let oddSum = 0

    for (let i = 1; i <= m; i++) {
        if (m > 0) {
            if (i % 2 == 1) {
                oddSum += i;
                console.log("The Sum of Odd Numbers from 1 to " + i + " is : " + oddSum);
            }
        }
        else {
            console.log('Error! Please Enter a Positive Number.');
        }
    }
}
totalOddnumSum();

// -------------------------------------------------------------------------------------------------


// 29. Enter n and Print Out Total Even Number's Sum.

function totalEvennumSum() {
    let n = +prompt("Enter a Number :");
    let evenSum = 0

    for (let i = 1; i <= n; i++) {
        if (n > 0) {
            if (i % 2 == 0) {
                evenSum += i;
                console.log("The Sum of Even Numbers from 1 to " + i + " is : " + evenSum);
            }
        }
        else {
            console.log('Error! Please Enter a Positive Number.');
        }
    }
}
totalEvennumSum();

// -------------------------------------------------------------------------------------------------


// 30. Enter n and print out sum of digit of a number.(E.g => 741 => 7 + 4 + 1);

function digitsSum() {
    let n = +prompt("Enter a Number :");
    let sum = 0;

    while (n > 0) {
        let digits = n % 10;
        sum += digits;
        n = (n - (n % 10)) / 10;
    }
    console.log("Sum of Digits :", sum);
}
digitsSum();
