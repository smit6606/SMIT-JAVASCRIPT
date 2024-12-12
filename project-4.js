// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning.

function wishGreeting(message) {
    if (message) {
        console.log(message)
    }
    else {
        console.log("GOOD MORNING Jay Shree Krishna");
    }
}

wishGreeting()

// Output:- GOOD MORNING Jay Shree Krishna

// ------------------------------------------------------------------------------------------------------------------------

// 2. Write a JAVASCRIPT Program to find Circle area (area pi*r*r) using return type with argument function.

function circleArea(radius) {
    const area = Math.PI * radius ** 2;
    return area;
}

console.log("The Area of Circle is", circleArea(4));

// Output: -  The Area of Circle is 50.26548245743669

// ---------------------------------------------------------------------------------------------------------------------------

// 3. Write a JAVASCRIPT Program to find Triangle area (area = (1*h)/2) using return type with argument function.

function triangleArea(base, height) {
    const tArea = (base * height) / 2;
    return tArea;
}

console.log("The Area of Triangle is", triangleArea(4, 6));

// Output: -  The Area of Triangle is 12

// --------------------------------------------------------------------------------------------------------------------------

// 4. Write a JAVASCRIPT Program to find Rectangle area = 1 h using return type with argument function.

function rectangleArea(length, heights) {
    const rArea = length * heights;
    return rArea;
}

console.log("The Area of Rectangle is", rectangleArea(4, 6));

// Output: -   The Area of Rectangle is 24

// --------------------------------------------------------------------------------------------------------------------------

// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

function calculateExpression(a, b, c) {
    var result = ((b * b) * (4 * a * c)) / (2 * a);
    return result;
}
console.log("Expression Result: ", calculateExpression(1, 2, 3));

// Output: -  Expression Result: 24

// ---------------------------------------------------------------------------------------------------------------------------

// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b)+(b*b) using return type with argument function

function quadraticExpression(a, b) {
    const result = (a * a) + (2 * a * b) + (b * b);
    return result;
}
console.log("Quadratic Expression Result: ", quadraticExpression(3, 4));

// Output:- Quadratic Expression Result:  49

// ---------------------------------------------------------------------------------------------------------------------------

// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8) using return type with argument function

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}
console.log("Celsius: ", fahrenheitToCelsius(98.6));

// Output: - Celsius: 36.99999999999999

// -------------------------------------------------------------------------------------------------------------------------

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32) using return type with argument function

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}
console.log("Fahrenheit: ", celsiusToFahrenheit(37)); // Example with 37°C

// Output: -  Fahrenheit: 98.60000000000001

// -------------------------------------------------------------------------------------------------------------------------

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using an argument with no return type.

function isOddOrEven(number) {
    if (number % 2 === 0) {
        console.log(number, "is Even");
    } else {
        console.log(number, "is Odd");
    }
}
isOddOrEven(7);

// Output: -   7 is Odd

// ----------------------------------------------------------------------------------------------------------------------

// 10. Write a JAVASCRIPT Program to swap a value without third variable using with

function swapValues(a, b) {
    console.log("Before Swap: a =", a, ", b =", b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("After Swap: a =", a, ", b =", b);
}
swapValues(10, 20);

// Output: -   Before Swap: a = 10, b = 20
//             After Swap: a = 20, b = 10

// ------------------------------------------------------------------------------------------------------------------------