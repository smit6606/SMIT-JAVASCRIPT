// 1) Wrtie a Javascript program to find the area of a traingle. 

let height = 20, base = 30;
let trainglearea = (height * base) / 2;

console.log("1) Area Of Traingle = " + trainglearea);

// Output :- 1) Area Of Traingle = 300

// ---------------------------------------------------------------------------------------------------------------------

// 2) Wrtie a Javascript program to convert temperature to and from celsius, farenheit.

let celsius = 32;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log("2) " + celsius + " °C = " + fahrenheit + " °F");

// Output :- 2) 32 °C = 89.6 °F

// ------------------------------------------------------------------------------------------------------------------------

// 3) Wrtie a Javascript program to find the area of rectangle. 

let length = 50, breadth = 80;
let rectangleArea = length * breadth;

console.log("3) Area Of Rectangle = " + rectangleArea);

// Output :- 3) Area Of Rectangle = 4000

// ----------------------------------------------------------------------------------------------------------------------

// 4) Wrtie a Javascript program to find the area of circle.

let radius = 7;
let circleArea = 3.14 * radius * radius;

console.log("4) Area Of Circle = " + circleArea);

// Output :- 4) Circle Area = 153.94

// ----------------------------------------------------------------------------------------------------------------------

// 5) Wrtie a Javascript program to convert feet into inches.

let feet = 5;
let inches = feet * 12;

console.log("2) " + feet + " feet = " + inches + " inches");

// Output:- 5) 5 feet = 60 inches

// ------------------------------------------------------------------------------------------------------------------------

// 6) Wrtie a Javascript program to calculate given formula :-
// i) (a^2) - (b^2) = (a-b)(a+b)

let a = 5, b = 3;
let lhs1 = a ** 2 - b ** 2;
let rhs1 = (a - b) * (a + b);

console.log("LHS : ", lhs1);
console.log("RHS : ", rhs1);

console.log("Are LHS and RHS are Equal?", lhs1 === rhs1);

// Output:-    LHS :  16
//             RHS :  16
//             Are LHS and RHS are Equal? true

// -----------------------------------------------------------------------------------------------------------------

// ii) (a-b)**(a-b) = a**2 + b**2 - 2ab

let c = 5, d = 3;
let lhs2 = (c - d) ** (c - d);
let rhs2 = c ** 2 + d ** 2 - 2 * c * d;

console.log("LHS : ", lhs2);
console.log("RHS : ", rhs2);

console.log("Are LHS and RHS are Equal?", lhs2 === rhs2);

// Output:-    LHS :  4
//             RHS :  4
//             Are LHS and RHS are Equal? true

// --------------------------------------------------------------------------------------------------------------------

// iii) (a+b+c)*(a+b+c) = a**2 + b**2 + c**2 + 2*a*b + 2*a*c + 2*b*c;

let e = 5, f = 3, g = 4;
let lhs3 = (e + f + g) * (e + f + g);
let rhs3 = e ** 2 + f ** 2 + g ** 2 + 2 * e * f + 2 * e * g + 2 * f * g;

console.log("LHS : ", lhs3);
console.log("RHS : ", rhs3);

console.log("Are LHS and RHS are Equal?", lhs3 === rhs3);

// Output:-   LHS :  144
//            RHS :  144
//            Are LHS and RHS are Equal? true

// --------------------------------------------------------------------------------------------------------------------

// iv) (a-b-c)*(a-b-c) = a**2 + b**2 + c**2 - 2*a*b - 2*a*c + 2*b*c;

let x = 5, y = 3, z = 4;
let lhs4 = (x - y - z) * (x - y - z);
let rhs4 = x ** 2 + y ** 2 + z ** 2 - 2 * x * y - 2 * x * z + 2 * y * z;

console.log("LHS : ", lhs4);
console.log("RHS : ", rhs4);

console.log("Are LHS and RHS are Equal?", lhs4 === rhs4);

// Output:-   LHS :  4
//            RHS :  4
//            Are LHS and RHS are Equal? true

// ---------------------------------------------------------------------------------------------------------------------

// v) (a-b)**3 = a**3 - 3*a**2*b + 3*a**2*b - b**3

let s = 5, t = 3;
let lhs5 = (s - t) ** 3;
let rhs5 = s ** 3 - 3 * s ** 2 * t + 3 * s * t ** 2 - t ** 3;

console.log("LHS : ", lhs5);
console.log("RHS : ", rhs5);

console.log("Are LHS and RHS are Equal?", lhs5 === rhs5);

// Output:-    LHS :  8
//             RHS :  8
//             Are LHS and RHS are Equal? true

// --------------------------------------------------------------------------------------------------------------------






