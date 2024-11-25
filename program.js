/*
    1) convert dollar into ruppees
    2) convert feet into inches
    3) convert celcius into fahrehiet
    4) find out area of traingle
    5) find out area of rectangle
    6) find out area of circle
    7) find out simple interest
    8) find out the final salary of employee (basic, hra(12%), pa(18%))
*/

// 1) Convert dollar into rupees
let dollar = 20;
let rupees = dollar * 83.2;

console.log("1) " + dollar + " dollars = " + rupees + " rupees");


// 2) Convert feet into inches
let feet = 5;
let inches = feet * 12;
console.log("2) " + feet + " feet = " + inches + " inches");


// 3) Convert Celsius into Fahrenheit
let celsius = 30;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log("3) " + celsius + " °C = " + fahrenheit + " °F");


// 4) Area of a triangle
let base = 10, height = 5;
let triangleArea = (base * height) / 2;
console.log("4) Triangle Area = " + triangleArea);

// 5) Area of a rectangle
let length = 10, breadth = 5;
let rectangleArea = length * breadth;
console.log("5) Rectangle Area = " + rectangleArea);


// 6) Area of a circle
let radius = 7;
let circleArea = Math.PI * radius * radius;
console.log("6) Circle Area = " + circleArea.toFixed(2));


// 7) Simple interest
let principal = 1000, rate = 5, time = 2;
let simpleInterest = (principal * rate * time) / 100;
console.log("7) Simple Interest = " + simpleInterest);

// 8) Final salary
let basic = 20000, hra = basic * 0.12, pa = basic * 0.18, finalSalary = basic + hra + pa;
console.log("8) Final Salary = " + finalSalary);
