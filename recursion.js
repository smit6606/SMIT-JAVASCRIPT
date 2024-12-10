// Recursion ==> A function calls itself again and again

// function Greetings(n) {
//     console.log("Inside Function Called", n);
//     if (n > 5) {
//         Greetings(--n)
//     }
//     console.log("Function Finished....", n)
// }

// Greetings(8);


// Factorial number using recursion function

// function Fact(n) {
//     if (n == 1) {
//         return 1;
//     }
//     else {
//         return n * Fact(n - 1);
//     }
// }

// console.log(Fact(5));

// Fibonacci Series 1 1 2 3 5 8 13.......

// function printFibonacci(n, a = 0, b = 1) {
//     if (n === 0) return; 
//     console.log(a); 
//     printFibonacci(n - 1, b, a + b); 
// }


// printFibonacci(10);
