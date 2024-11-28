// Switch-Case 

/*

switch (condition) {
    case 1: add;
        break;
    default:
        break;
}

*/

// let num1 = 30, num2 = 40, choice = "Sub";

// switch (choice) {
//     case "Add":
//         console.log("Addition is : ", num1 + num2);
//         break;

//     case "Sub":
//         console.log("Subtraction is :", num1 - num2);
//         break;

//     case "Product":
//         console.log("Product is :", num1 * num2);
//         break;

//     case "Division":
//         console.log("Division is :", num1 / num2);
//         break;

//     default:
//         console.log("Wrong Choice");
//         break;
// }

// let number1, number2, choices;

// number1 = Number(prompt("Enter Number 1"));
// console.log(number1)

// number2 = Number(prompt("Enter Number 2"));
// console.log(number2)

// choices = prompt("Enter Your Choices");

// switch (choices) {
//     case "add":
//         console.log("Addition is : ", number1 + number2);
//         break;

//     case "sub":
//         console.log("Subtraction is :", number1 - number2);
//         break;

//     case "product":
//         console.log("Product is :", number1 * number2);
//         break;

//     case "division":
//         console.log("Division is :", number1 / number2);
//         break;

//     case "modulo":
//         console.log("Remainder is :", number1 % number2);
//         break;

//     case "power":
//         console.log("Division is :", number1 ** number2);
//         break;

//     case "division":
//         console.log("Division is :", number1 / number2);
//         break;

//     case "division":
//         console.log("Division is :", number1 / number2);
//         break;

//     case "division":
//         console.log("Division is :", number1 / number2);
//         break;

//     case "division":
//         console.log("Division is :", number1 / number2);
//         break;

//     case "square":
//         console.log("Square of number1 is :", number1 ** 2);
//         console.log("Square of number2 is :", number2 ** 2);
//         break;

//     case "cube":
//         console.log("Cube of number1 is :", number1 ** 3);
//         console.log("Cube of number2 is :", number2 ** 3);
//         break;f

//     case "max":
//         console.log("Maximum is :", Math.max(number1, number2));
//         break;

//     case "min":
//         console.log("Minimum is :", Math.min(number1, number2));
//         break;

//     case "average":
//         console.log("Average is :", (number1 + number2) / 2);
//         break;

//     case "percentage":
//         console.log("Percentage of number1 to number2 is :", (number1 / number2) * 100, "%");
//         break;

//     default:
//         console.log("Wrong Choice");
//         break;
// }

// Grade Example

let marks;

marks = Number(prompt("Enter Your Marks"));

if (marks >= 90 && marks < 100){
    console.log("Your Grade is A")
}
else if(marks >= 80 && marks < 90){
    console.log("Your Grade is B")
}
else if(marks >= 70 && marks < 80){
    console.log("Your Grade is C")
}
else if(marks >= 60 && marks < 70){
    console.log("Your Grade is D")
}
else if(marks >= 50 && marks < 60){
    console.log("Your Grade is E")
}
else if(marks >= 33 && marks < 50){
    console.log("You are Just Pass!!!")
}
else if(marks >=0 &&  marks < 33){
    console.log("Sorry! You are fail. Come Tommorrow!")
}
else{
    console.log("enter a valid number")
}

// NUN

console.log(10 + "5");
console.log(10 * "5");
console.log(10 - "5");
console.log(10 / "5");

console.log("6" + 105);
console.log("6" - 105);
console.log("6" * 105);
console.log("6" / 105);

console.log(10 + "A");
console.log(10 - "A");
console.log(10 * "A");
console.log(10 / "A");




