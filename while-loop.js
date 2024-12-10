// while loop programs

// i) Print out 10 to 1

// let i = 10;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// ii) Print out 51 to 79

// let j = 51;
// while (j <= 79) {
//     console.log(j);
//     j++;
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// iii) Enter n and print out 1 to n

// let n = Number(prompt("Enter the value of n"));
// let k = 1;
// while (k <= n) {
//     console.log(k);
//     k++;
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// iv) Enter n and print out -n to 1

// let n = Number(prompt("Enter The Number of n"));
// let i = -n;
// while (i <= 1) {
//     console.log(i);
//     i++;
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// v) Enter n and print out -n to n

// let n = Number(prompt("Enter The Number of n"));
// let i = -n;
// while (i <= n) {
//     console.log(i);
//     i++;
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// vi) Enter n and print out odd numbers up to n

// let n = Number(prompt("Enter The Number of n"));
// let i = 1;
// while (i <= n) {
//     console.log(i);
//     i += 2;
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// vii) Enter n and print out even numbers up to n


// let n = Number(prompt("Enter The Number of n"));
// let i = 0;
// while (i <= n) {
//     console.log(i);
//     i += 2;
// }

// viii) Series print out 1, 4, 3, 16, 5, 36.......

// ---------------------------------------------------------------------------------------------------------------------------------

// let i = 1;
// while (i <= 10) {
//     console.log(i % 2 === 0 ? i * i : i);
//     i++;
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// ix) Series print out 1, 1, 2, 3, 5, 8 .....

// let n = parseInt(prompt("Enter the number of terms: "));
// let a = 0, b = 1;
// let i = 1;

// console.log("Fibonacci Series:");
// while (i <= n) {
//     console.log(b);
//     let temp = b;
//     b = a + b;
//     a = temp;
//     i++;
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// x) Series print out 1, 4, 12, 32, 80, 192, 448 .......

// let n = 10;
// let first = 1, second = 4;
// let i = 3;

// console.log(first);
// console.log(second);

// while (i <= n) {
//     let next = (second - first) * 4;
//     console.log(next);
//     first = second;
//     second = next;
//     i++;
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// xi) Find out the factorail of a given number in javascript.

// let num = Number(prompt("Enter a number to find its factorial:"));
// let result = 1;
// let i = 1;

// while (i <= num) {
//     result *= i;
//     i++;
// }

// console.log(`The factorial of ${num} is ${result}`);

// ---------------------------------------------------------------------------------------------------------------------------------

// xii) Enter n and print out total odd/even number's sum using while loop:

// let n = Number(prompt("Enter a number total odd/even number's sum:"));
// let oddSum = 0;
// let evenSum = 0;
// let i = 1;

// while (i <= n) {
//     if (i % 2 === 0) {
//         evenSum += i;
//     } else {
//         oddSum += i;
//     }
//     i++;
// }

// console.log(`Sum of odd numbers up to ${n}: ${oddSum}`);
// console.log(`Sum of even numbers up to ${n}: ${evenSum}`);

// ---------------------------------------------------------------------------------------------------------------------------------

// xiii) Enter n and print out total number's sum using while loop:

// let n = Number(prompt("Enter a number total number's sum:"));
// let sum = 0;
// let i = 1;

// if (n > 0) {
//     while (i <= n) {
//         sum += i;
//         i++;
//     }
//     console.log(`The sum of all numbers from 1 to ${n} is: ${sum}`);
// } else {
//     console.log("Please enter a valid positive number.");
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// xiv) Enter n and print out sum of digits of a number using while loop:

// let n = prompt("Enter a number: ");
// let sum = 0;
// let i = 0;

// while (i < n.length) {
//     sum += parseInt(n[i]);
//     i++;
// }

// console.log(`The sum of the digits of ${n} is: ${sum}`);

// ---------------------------------------------------------------------------------------------------------------------------------




// Do while loop


// i) Print out 10 to 1

// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);

// ---------------------------------------------------------------------------------------------------------------------------------

// ii) Print out 51 to 79

// let j = 51;
// do {
//     console.log(j);
//     j++;
// } while (j <= 79);

// ---------------------------------------------------------------------------------------------------------------------------------

// iii) Enter n and print out 1 to n

// let n = Number(prompt("Enter the value of n"));
// let k = 1;
// do {
//     console.log(k);
//     k++;
// } while (k <= n);

// ---------------------------------------------------------------------------------------------------------------------------------

// iv) Enter n and print out -n to 1

// let n = Number(prompt("Enter The Number of n"));
// let i = -n;
// do {
//     console.log(i);
//     i++;
// } while (i <= 1);

// ---------------------------------------------------------------------------------------------------------------------------------

// v) Enter n and print out -n to n

// let n = Number(prompt("Enter The Number of n"));
// let i = -n;
// do {
//     console.log(i);
//     i++;
// } while (i <= n);

// ---------------------------------------------------------------------------------------------------------------------------------

// vi) Enter n and print out odd numbers up to n

// let n = Number(prompt("Enter The Number of n"));
// let i = 1;
// do {
//     console.log(i);
//     i += 2;
// } while (i <= n);

// ---------------------------------------------------------------------------------------------------------------------------------

// vii) Enter n and print out even numbers up to n

// let n = Number(prompt("Enter The Number of n"));
// let i = 0;
// do {
//     console.log(i);
//     i += 2;
// } while (i <= n);

// ---------------------------------------------------------------------------------------------------------------------------------

// viii) Series print out 1, 4, 3, 16, 5, 36.......

// let i = 1;
// do {
//     console.log(i % 2 === 0 ? i * i : i);
//     i++;
// } while (i <= 10);

// ---------------------------------------------------------------------------------------------------------------------------------

// ix) Series print out 1, 1, 2, 3, 5, 8 .....

// let n = parseInt(prompt("Enter the number of terms: "));
// let a = 0, b = 1;
// let i = 1;

// console.log("Fibonacci Series:");
// do {
//     console.log(b);
//     let temp = b;
//     b = a + b;
//     a = temp;
//     i++;
// } while (i <= n);

// ---------------------------------------------------------------------------------------------------------------------------------

// x) Series 1, 4, 12, 32, 80, 192, 448 ... using do -while loop:

// let n = 10;
// let first = 1;
// let second = 4;
// let i = 3;

// console.log(first);
// console.log(second);

// do {
//     let next = (second - first) * 4;
//     console.log(next);
//     first = second;
//     second = next;
//     i++;
// } while (i <= n);

// ---------------------------------------------------------------------------------------------------------------------------------

// xi) Factorial of a given number using do -while loop:

// let num = Number(prompt("Enter a number to find its factorial:"));
// let result = 1;
// let i = 1;

// do {
//     result *= i;
//     i++;
// } while (i <= num);

// console.log(`The factorial of ${num} is ${result}`);

// ---------------------------------------------------------------------------------------------------------------------------------

// xii) Sum of odd / even numbers up to n using do -while loop:

// let n = Number(prompt("Enter a number total odd/even number's sum:"));
// let oddSum = 0;
// let evenSum = 0;
// let i = 1;

// do {
//     if (i % 2 === 0) {
//         evenSum += i;
//     } else {
//         oddSum += i;
//     }
//     i++;
// } while (i <= n);

// console.log(`Sum of odd numbers up to ${n}: ${oddSum}`);
// console.log(`Sum of even numbers up to ${n}: ${evenSum}`);

// ---------------------------------------------------------------------------------------------------------------------------------

// xiii) Total number's sum up to n using do-while loop:

// let n = Number(prompt("Enter a number total number's sum:"));
// let sum = 0;
// let i = 1;

// if (n > 0) {
//     do {
//         sum += i;
//         i++;
//     } while (i <= n);
//     console.log(`The sum of all numbers from 1 to ${n} is: ${sum}`);
// } else {
//     console.log("Please enter a valid positive number.");
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// xiv) Sum of digits of a number using do -while loop:

// let n = prompt("Enter a number: ");
// let sum = 0;
// let i = 0;

// do {
//     sum += parseInt(n[i]);
//     i++;
// } while (i < n.length);

// console.log(`The sum of the digits of ${n} is: ${sum}`);

// ---------------------------------------------------------------------------------------------------------------------------------




