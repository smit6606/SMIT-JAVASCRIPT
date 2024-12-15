/*
    Arithmetic Operators : +, -, *, /, %, ++, --
    Asignment Operators : =, +=, -=, *=, /=, %=, **=
    Comparison Operators : >, <, <=, >=, ==, !=, ===, !== 
    Logical Operators : &&, ||, !
*/

// Arithmetic Operators

let a = 10, b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a++);
console.log(b--);
console.log(++b);
console.log(--b);



// Asignment Operators

let x = 5; y = 15;

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
console.log(x **= y);


// Comparison Operators

let c = 30; d = 40;

console.log(c > d);
console.log(c >= d);
console.log(c < d);
console.log(c <= d);
console.log(c == d);
console.log(c === d);
console.log(c != d);
console.log(c !== d);



// Logical Operators

let e = 0, f = 1;

console.log(e && f);
console.log(f && e);
console.log(!(e > 0 && f > 0));
console.log(e || f);
console.log(f || e);
console.log(!(e > 0 || f > 0));