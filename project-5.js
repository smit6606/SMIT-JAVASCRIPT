/*
1 Write a simple JavaScript program to print expected Output using the following array.

Sample array: myColor = ["Red", "Green", "White", "Black"];

Red, Green, White, Black

Red+Green+White+Black

Red, Green, White

Red

Green, White

Red, Green, White, Black, orange
*/

let myColor = ["Red", "Green", "White", "Black"];

// 1)
console.log(myColor.join(", "));

// 2)
console.log(myColor.join(" + "));

// 3)
console.log(myColor.slice(0, 3).join(", "));

// 4)
console.log(myColor[0]);

// 5)
console.log(myColor.slice(1, 3).join(", "));

// 6)
console.log([...myColor, "orange"].join(", "));

// Output:-
//  Red, Green, White, Black
//  Red + Green + White + Black
//  Red, Green, White
//  Red
//  Green, White
//  Red, Green, White, Black, orange

// ---------------------------------------------------------------------------------------------------------------------

// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.

let numbers = [1, 2, 3, 4, 5];

let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumFor += numbers[i];
}
console.log("Sum using for loop:", sumFor);

let sumForEach = 0;
numbers.forEach(num => sumForEach += num);
console.log("Sum using forEach:", sumForEach);

// Output:-
// Sum using for loop: 15
// Sum using forEach: 15

// ---------------------------------------------------------------------------------------------------------------------

// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)


let arr = [120, 33, 90, 1234, 732, 27];

arr.sort((a, b) => a - b);
let min = arr[0];
let max = arr[arr.length - 1];

console.log("Maximum Value is :", max);
console.log("Minimum Value is :", min);

// Output:-
// Maximum Value is : 1234
// Minimum Value is : 27

// ---------------------------------------------------------------------------------------------------------------------

// 4.Write a JavaScript program to convert all array elements into ASCII values.

const inputArray = ['A', 'B', 'C', 'D', 'Z', 'a'];


function convertToAscii(arr) {
    return arr.map(char => char.charCodeAt(0));
}
const asciiArray = convertToAscii(inputArray);

console.log("ASCII Array:", asciiArray);

// Output:- 
// ASCII Array: [65, 66, 67, 68, 90, 97]

// -------------------------------------------------------------------------------------------------------------------

// 5.Write a JavaScript program to remove negative values using the filter array function.

// numbers[-23,-20,-17,-12,-5, 0, 1, 5, 12, 19, 20];

let number = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
let nonNegative = number.filter(num => num >= 0);
console.log(nonNegative);

// Output:-
// [0, 1, 5, 12, 19, 20]

// -------------------------------------------------------------------------------------------------------------------

// 6. Write a JavaScript program using array map() method and return the square of the array element.

// arr[2, 5, 6, 3, 8, 9];

let array = [2, 5, 6, 3, 8, 9];
let squares = array.map(num => num ** 2);
console.log(squares);

// Output:-
//  [4, 25, 36, 9, 64, 81]

// -------------------------------------------------------------------------------------------------------------------

// 7.Write a JavaScript program for sorting an array in ascending descending.

// numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];

// myColor = ["Red", "Green", "White", "Black"];

let num = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
let ascending = [...num].sort((a, b) => a - b);
let descending = [...num].sort((a, b) => b - a);

console.log("Ascending:", ascending);
console.log("Descending:", descending);

// Output:-
// Ascending: [0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23]
// Descending: [23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0]

let ascendingColors = [...myColor].sort();
console.log("Colors Ascending:", ascendingColors);

let descendingColors = [...myColor].sort().reverse();
console.log("Colors Descending:", descendingColors);

// Output:-
// Colors Ascending: (4) ['Black', 'Green', 'Red', 'White']
// Colors Descending: (4) ['White', 'Red', 'Green', 'Black']

// -------------------------------------------------------------------------------------------------------------------

// 8. Write a JavaScript program which filters out any string which is less than 8 characters.

// words=['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let filtered = words.filter(word => word.length >= 8);
console.log(filtered);

// Output:-
// ['Javascript']

// -------------------------------------------------------------------------------------------------------------------

/*
9. write a JavaScript program to print expected Output for the following string.

x="airplane"; Output:-r

x = "oxoxoxox"; Output:- "oXоХохох"

x="A New Java Book";

Output:- "a new java book", "A NEW JAVA BOOK"
*/

let x = "airplane";
console.log(x[2]);      
// Output: 'r'

let pattern = "oxoxoxox";
let result = pattern.split('x').join('X');
console.log(result);
// Output: 'oXoXoXoX'

x = "A New Java Book";
console.log(`"${x.toLowerCase()}" ,"${x.toUpperCase()}"`,); 
// Output:- "a new java book" ,"A NEW JAVA BOOK"

// -------------------------------------------------------------------------------------------------------------------

// 10. write a JavaScript program for array reverse.

let arrays = [1, 2, 3, 4, 5];
console.log(arrays.reverse());

// Output:-
// [5, 4, 3, 2, 1]

// -------------------------------------------------------------------------------------------------------------------

// 11. write a JavaScript program to check if a value is found or not?

let numberss = [1, 2, 3, 4, 5];
console.log(numberss.includes(3));      //Output:  true
console.log(numberss.includes(6));      // Output: false

// -------------------------------------------------------------------------------------------------------------------

// 12. write a JavaScript program to print your name and write the number of total characters.

let Name = "Smit Garala";
console.log(Name);
console.log("Total Characters:", Name.length);
// Output:-
// Smit Garala
// Total Characters : 11

// -------------------------------------------------------------------------------------------------------------------

/*
13. write a JavaScript program given this Output using replace concept.

Input: "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

Output: "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"
*/

let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
let Output = input.replace(/dog/g, "cat");
console.log(Output);

// Output:-
// I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning.

// -------------------------------------------------------------------------------------------------------------------

/*14. write a JavaScript program convert string to array.

Input: - "Hire the top 1% freelance developers";

Output: -["Hire", "the", "top", "1%"]
*/

let str = "Hire the top 1% freelance developers";
let array2 = str.split(" ").slice(0, 4);
console.log(array2);

// Output:-
// ['Hire', 'the', 'top', '1%']

// -------------------------------------------------------------------------------------------------------------------

// 15. write a JavaScript program to convert an array to string.

// Input: -['5', 32, 'Daniel'];

// Output: 5, 32, Daniel

let array3 = ['5', 32, 'Daniel'];
console.log(array3.join(", "));

// Output:-
// 5, 32, Daniel

// -------------------------------------------------------------------------------------------------------------------

