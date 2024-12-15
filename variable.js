/*/

variable => variable is a like this container to store information or data

When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

*/

// Initalization

var a;
let x;
const PI = 3.14;    //assign

a = 10;
console.log(a);

/*

One Statement, Many Variables
You can declare many variables in one statement.

Start the statement with let and separate the variables by comma:

ex- let person = "John Doe", carName = "Volvo", price = 200;

*/

// Data types 

// 1) Primitive
//     - Number
//     - String
//     - Boolean
//     - null
//     - undefined
//     - Symbol
//     - BigInt

// 2) Non-Primitive
//     - Object

let num = 10;
console.log(num);
console.log(typeof num);

let num2 = "smit";
console.log(num2);
console.log(typeof num2);

let num3 = true;
console.log(num3);
console.log(typeof num3);