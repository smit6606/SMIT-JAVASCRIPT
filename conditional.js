/* Conditional Statement --> if else, nested, ladder, switch, ternary operator 

1) if-else Statement

if(condition){
    statement...
}
else{
    statement...
}

*/

// find small no between two number by if-else statement

// let num1 = 20, num2 = 50;

// if(num1 < num2){
//     console.log("Small number is:", num1)
// }
// else{
//     console.log("Small number is:", num2)
// }

/* 

2)Ternary Operator

condition ? true : false

*/

// find small no between two number by ternary operator

// num1 < num2 ? console.log("Small no is:", num1) : console.log("Small no is:", num2)

// console.log("Small no is:", num1 < num2 ? num1 : num2)

/*

Swapping Two Number :-
     i) Third Variable
     ii) Without Third Variable
     iii) XOR
    
*/

// i) Third Variable

// let a = 10, b = 20, c
// console.log("Before Swapping");
// console.log("A ------->", a);
// console.log("B ------->", b);

// c = a;
// a = b;
// b = c;

// console.log("After Swapping");
// console.log("A ------->", a);
// console.log("B ------->", b);

// ii) Without Third Variable

// let x = 10, y = 20;
// console.log("Before Swapping");
// console.log("X ------->", x);
// console.log("Y ------->", y);

// x = x + y;
// y = x - y;
// x = x - y;

// console.log("After Swapping");
// console.log("X ------->", x);
// console.log("Y ------->", y);

// iii) XOR 

// let x = 10, y = 20;
// console.log("Before Swapping");
// console.log("X ------->", x);
// console.log("Y ------->", y);

// x = x ^ y;
// y = x ^ y;
// x = x ^ y;

// console.log("After Swapping");
// console.log("X ------->", x);
// console.log("Y ------->", y);


// 3) Nested if-else

/*

if (condition) {
    if (condition) {
        statement
    }
    else {
        statement
    }
}
else {
    statement
}

*/

// Example :- Three Variable => Smallest Value by nested if-else

let a = 20, b = 0, c = 4;

if (a < b) {
    if (a < c) {
        console.log("Small Number is :", a);
    }
    else {
        console.log("Smaller Number is :", c);
    }
}
else {
    if (b < c) {
        console.log("Smallester Number is :", b);
    }
    else {
        console.log("Smallest Number is :", c);
    }
}

// Example :- Three Variable => Greatest Value by nested if-else

let x = 20, y = 0, z = 4;

if (x > y) {
    if (x > z) {
        console.log("Greater Number is :", x);
    }
    else {
        console.log("Greatest Number is :", z);
    }
}
else {
    if (y > z) {
        console.log("Great Number is :", y);
    }
    else {
        console.log("Greatester Number is :", z);
    }
}


// 4) Ladder if-else :-

/*

if (condition) {
    statement
}
else if (condition) {
    statement
}
else {
    statement
}

*/

// Example :- Three Variable => Smallest Value by ladder if-else

let p = 300, q = 40, r = 20;

if (p < q && p < r) {
    console.log("Smallest no is :", p);
}
else if (q < r) {
    console.log("Smallest no is :", q);
}
else {
    console.log("Smallest no is :", r);
}

// Example :- Three Variable => Greatest Value by ladder if-else

let i = 300, j = 40, k = 20;

if (i > j && i > k) {
    console.log("Greatest no is :", i);
}
else if (j > k) {
    console.log("Greatest no is :", j);
}
else {
    console.log("Greatest no is :", k);
}

















