// 1) Write JS Program to check number is Palindrome or not

// let number = Number(prompt("Enter the number to check whether the number is palindrome or not"))
// let originalNumber = number;
// let reversedNumber = 0;

// while (number > 0) {
//     let digit = number % 10;
//     reversedNumber = reversedNumber * 10 + digit;
//     number = (number - (number % 10)) / 10;
// }

// if (originalNumber === reversedNumber) {
//     console.log(originalNumber, "is a palindrome.");
// } else {
//     console.log(originalNumber, "is NOT a palindrome.");
// }

// Output:- When you enter Number is 56765 then,

// 56765 'is a palindrome.'

// ------------------------------------------------------------------------------------------------------------------------------

// 2) Print Series 1, 4, 3, 16, 5, ....

// for (let i = 1; i <= 10; i++) {
//     console.log(i % 2 === 0 ? i * i : i);
// }

// Output:- 1
//          4
//          3
//          16
//          5
//          36
//          7
//          64
//          9
//          100


// -------------------------------------------------------------------------------------------------------------------------

// 3) Print Multiplication table of n
// let n = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(n + " x " + i + " = " + (n * i));
// }

// Output:- 5 x 1 = 5
//         5 x 3 = 15
//         5 x 2 = 10
//         5 x 4 = 20
//         5 x 5 = 25
//         5 x 6 = 30
//         5 x 7 = 35
//         5 x 8 = 40
//         5 x 9 = 45
//         5 x 10 = 50

// ---------------------------------------------------------------------------------------------------------------------------

// 4) Find out sum of digit of given number

// let number = Number(prompt("enter the number"));
// let sum = 0;

// while (number > 0) {
//     let digit = number % 10;
//     sum += digit;
//     number = (number - (number % 10)) / 10;
// }

// console.log("The sum of the digits is:", sum);

// Output:- When you enter number 45 then,
// The sum of the digits is: 9

// --------------------------------------------------------------------------------------------------------------------------

// 5) Print series 1, 1, 2, 3, 5, 8, ...

let a = +prompt("Enter a Number :");
let x = 1; y = 1;
let z;

for (let i = 1; i <= a; i++) {
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

// Output:- when you enter 10 then,

// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55