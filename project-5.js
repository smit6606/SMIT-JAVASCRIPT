/*
Q.1) Write a simple JavaScript program to print expected Output using the following array.

Sample array: myColor = ["Red", "Green", "White", "Black"];

Red,Green,White,Black

Red+Green+White+Black

Red,Green,White

Red

Green,White

Red,Green,White,Black,orange
*/

let myColor = ["Red", "Green", "White", "Black"];

// 1)
console.log(myColor.join(","));

// 2)
console.log(myColor.join("+"));

// 3)
console.log(myColor.slice(0, 3).join(","));

// 4)
console.log(myColor[0]);

// 5)
console.log(myColor.slice(1, 3).join(","));

// 6)
console.log([myColor, "orange"].join(","));

// Output:-
//  Red,Green,White,Black
//  Red+Green+White+Black
//  Red,Green,White
//  Red
//  Green,White
//  Red,Green,White,Black,orange

// ---------------------------------------------------------------------------------------------------------------------

// Q.2) Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.

let data = [10, 20, 30, 40, 50];

let sumFor = 0;
for (let i = 0; i < data.length; i++) {
    sumFor += data[i];
}
console.log("Q.2) i) Total sum calculated with a for loop is:", sumFor);

let sumForEach = 0;
data.forEach(num => sumForEach += num);
console.log("    ii) Total sum calculated with forEach method is:", sumForEach);


// Output:-
// Q.2) i) Total sum calculated with a for loop is: 150
//      ii) Total sum calculated with forEach method is: 150


// ---------------------------------------------------------------------------------------------------------------------

// Q.3)Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

let arr = [120, 33, 90, 1234, 732, 27];

arr.sort((a, b) => a - b);
let min = arr[0];
let max = arr[arr.length - 1];

console.log("Q.3) i) The maximum value in the array is:", max);
console.log("    ii) The minimum value in the array is:", min);


// Output:-
// Q.3) i) The maximum value in the array is: 1234
//      ii) The minimum value in the array is: 27

// ---------------------------------------------------------------------------------------------------------------------

// Q.4) Write a JavaScript program to convert all array elements into ASCII values.

const inputArray = ['A', 'B', 'C', 'D', 'Z', 'a'];


function convertToAscii(arr) {
    return arr.map(char => char.charCodeAt(0));
}
const asciiArray = convertToAscii(inputArray);

console.log("Q.4) ASCII Array:", asciiArray);

// Output:- 
// Q.4) ASCII Array: (6) [65, 66, 67, 68, 90, 97]

// -------------------------------------------------------------------------------------------------------------------

// Q.5) Write a JavaScript program to remove negative values using the filter array function.

// numbers[-23,-20,-17,-12,-5, 0, 1, 5, 12, 19, 20];

let number = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
let nonNegative = number.filter(num => num >= 0);
console.log("Q.5)", nonNegative);

// Output:-
// Q.5) (6) [0, 1, 5, 12, 19, 20]

// -------------------------------------------------------------------------------------------------------------------

// Q.6) Write a JavaScript program using array map() method and return the square of the array element.

// arr[2, 5, 6, 3, 8, 9];

let array = [2, 5, 6, 3, 8, 9];

function getSquares(array) {
    return array.map(num => num ** 2);
}

let squares = getSquares(array);
console.log("Q.6)", squares);

// Output:-
// Q.6) (6) [4, 25, 36, 9, 64, 81]

// -------------------------------------------------------------------------------------------------------------------

// 7.Write a JavaScript program for sorting an array in ascending descending.

// numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];

// myColor = ["Red", "Green", "White", "Black"];

let nums = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

let asc = [...nums].sort((a, b) => a - b);
let desc = [...nums].sort((a, b) => b - a);

console.log("Q.7) i) Sorted numbers in Ascending Order:", asc);
console.log("    ii) Sorted numbers in Descending Order:", desc);

let colors = ["Red", "Green", "White", "Black"];

let ascColors = [...colors].sort();
let descColors = [...colors].sort().reverse();

console.log("   iii) Colors sorted in Ascending Order:", ascColors);
console.log("    iv) Colors sorted in Descending Order:", descColors);

// Output:-
// Q.7) i) Sorted numbers in Ascending Order: (11) [0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23]
//      ii) Sorted numbers in Descending Order: (11) [23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0]
//     iii) Colors sorted in Ascending Order: (4) ['Black', 'Green', 'Red', 'White']
//      iv) Colors sorted in Descending Order: (4) ['White', 'Red', 'Green', 'Black']

// -------------------------------------------------------------------------------------------------------------------

// 8. Write a JavaScript program which filters out any string which is less than 8 characters.

// words=['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let filtered = words.filter(word => word.length >= 8);
console.log("Q.8)", filtered);

// Output:-
// Q.8) ['Javascript']

// -------------------------------------------------------------------------------------------------------------------

/*
9. write a JavaScript program to print expected Output for the following string.

x="airplane"; Output:-r

x = "oxoxoxox"; Output:- "oXоХохох"

x="A New Java Book";

Output:- "a new java book", "A NEW JAVA BOOK"
*/

let x = "airplane";
console.log("Q.9) i)", x[2]);

let pattern = "oxoxoxox";
let result = pattern.split('x').join('X');
console.log("    ii)", result);

x = "A New Java Book";
console.log(`   iii) "${x.toLowerCase()}" ,"${x.toUpperCase()}"`,);

// Output:-
// Q.9) i) r
//      ii) oXoXoXoX
//     iii) "a new java book" ,"A NEW JAVA BOOK"

// -------------------------------------------------------------------------------------------------------------------

// 10. write a JavaScript program for array reverse.

let sequence = [1, 2, 3, 4, 5];
console.log("Q.10)", sequence.reverse());

// Output:-
// Q.10) (5) [5, 4, 3, 2, 1]

// -------------------------------------------------------------------------------------------------------------------

// 11. write a JavaScript program to check if a value is found or not?

let items = ["Smit", "Rahul", "Jay", "Gautam", "Taksh"];
console.log("Q.11) i)", items.includes("Smit"));
console.log("     ii)", items.includes("smit"));

// Output:-
// Q.11) i) true
//       ii) false

// -------------------------------------------------------------------------------------------------------------------

// 12. write a JavaScript program to print your name and write the number of total characters.

let Name = "Smit Garala";
console.log(`Q.12) ${Name}:`,"Total Characters:", Name.length);

// Output:-
// Q.12) Smit Garala: Total Characters: 11

// -------------------------------------------------------------------------------------------------------------------

/*
13. write a JavaScript program given this Output using replace concept.

Input: "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

Output: "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"
*/

let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
let Output = input.replace(/dog/g, "cat");
console.log("Q.13)",Output);

// Output:-
// Q.13) I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning

// -------------------------------------------------------------------------------------------------------------------

/*14. write a JavaScript program convert string to array.

Input: - "Hire the top 1% freelance developers";

Output: -["Hire", "the", "top", "1%"]
*/

let sentence = "Hire the top 1% freelance developers";
let word = sentence.split(" ").slice(0, 4);
console.log("Q.14)", word);

// Output:-
// Q.14) (4) ['Hire', 'the', 'top', '1%']

// -------------------------------------------------------------------------------------------------------------------

// 15. write a JavaScript program to convert an array to string.

// Input: -['5', 32, 'Daniel'];

// Output: 5, 32, Daniel

let dataList = ['5', 32, 'Daniel'];
console.log("Q.15)",dataList.join(", "));

// Output:-
// Q.15) 5, 32, Daniel

// -------------------------------------------------------------------------------------------------------------------

