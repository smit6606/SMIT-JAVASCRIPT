// Array:- Stores mutiple value in single variable. (index value start with 0)

/*
Syntax:     let arr[]
            let arr = new Array()
*/

// Example:

let arr = [101, 112, 103, 104, 105,]
console.log(arr);                                   // [101, 112, 103, 104, 105]
console.log(arr[3]);                                // 104

// To Add the Value at any specific point 
// arr[99] = 1001;
// console.log(arr);
// arr[50] = 501;
// console.log(arr);

// To Replace value

arr[1] = 102
console.log(arr);                                   // [101, 102, 103, 104, 105]

console.log(typeof arr);                            // object
console.log(Array.isArray(arr));                    // true
console.log(arr.length);                            // 5

// Methods:- Push(), Pop(), Shift(), Unshift(), Splice(), Slice(), Concat(), Includes(), IndexOf(), Find(), Map(), Sort(), Reverse().

/*
1. PUSH()

Definition: Adds one or more elements to the end of an array.
Syntax: array.push(element1, element2, ...);
*/

let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// Output: [1, 2, 3, 4]

// ------------------------------------------------------------------------------------------------------

/*
2. POP()

Definition: Removes the last element from an array and returns that element.
Syntax: array.pop();
*/

let arr = [1, 2, 3];
arr.pop();
console.log(arr);

// Output: [1, 2]

// ------------------------------------------------------------------------------------------------------

/*
3. SHIFT()

Definition: Removes the first element from an array and returns it.
Syntax:array.shift();
*/

let arr = [1, 2, 3];
arr.shift();
console.log(arr);

// Output: [2, 3]

// ------------------------------------------------------------------------------------------------------

/*
4. UNSHIFT()

Definition: Adds one or more elements to the beginning of an array and returns the new length.
Syntax: array.unshift(element1, element2, ...);
*/

let arr = [2, 3];
arr.unshift(1);
console.log(arr);

// Output: [1, 2, 3]

// ------------------------------------------------------------------------------------------------------

/*
5. SPLICE()

Definition: Adds, removes, or replaces elements in an array.
Syntax: array.splice(start, deleteCount, item1, item2, ...);
*/

let arr = [1, 2, 4];
arr.splice(2, 0, 3); // Add 3 at index 2
console.log(arr);

// Output: [1, 2, 3, 4]

// ------------------------------------------------------------------------------------------------------

/*
6. SLICE()

Definition: Returns a shallow copy of a portion of an array without modifying it.
Syntax: array.slice(start, end);
*/

let arr = [1, 2, 3, 4];
let sliced = arr.slice(1, 3);
console.log(sliced);

// Output: [2, 3]

// ------------------------------------------------------------------------------------------------------

/*
7. CONCAT()

Definition: Combines two or more arrays and returns a new array.
Syntax: array.concat(array2, array3, ...);
*/

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined);

// Output: [1, 2, 3, 4]

// ------------------------------------------------------------------------------------------------------

/*
8. INCLUDES()

Definition: Checks if an array contains a specific value.Returns true or false.
Syntax: array.includes(element, startIndex);
*/

let arr = [1, 2, 3];
console.log(arr.includes(2));

// Output: true

console.log(arr.includes(5));

// Output: false

// ------------------------------------------------------------------------------------------------------

/*
9. INDEXOF()

Definition: Returns the index of the first occurrence of a value, or - 1 if not found.
Syntax: array.indexOf(element, startIndex);
*/

let arr = [1, 2, 3];
console.log(arr.indexOf(2));

// Output: 1

console.log(arr.indexOf(5));

// Output: -1

// ------------------------------------------------------------------------------------------------------

/*
10. FIND()

Definition: Returns the first element that satisfies a condition.
Syntax: array.find(callback);
*/

let arr = [1, 2, 3, 4];
let found = arr.find(num => num > 2);
console.log(found);

// Output: 3

/*
11. MAP()

Definition: Creates a new array by applying a function to each element.
Syntax: array.map(callback);
*/

let arr = [1, 2, 3];
let doubled = arr.map(num => num * 2);
console.log(doubled);

// Output: [2, 4, 6]

// ------------------------------------------------------------------------------------------------------

/*
12. SORT()

Definition: Sorts the elements of an array(default is lexicographical).
Syntax: array.sort(compareFunction);
*/

let arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b); // Ascending order
console.log(arr);

// Output: [1, 2, 3, 4]

// ------------------------------------------------------------------------------------------------------

/*
13. REVERSE()

Definition: Reverses the order of elements in an array.
Syntax: array.reverse();
*/

let arr = [1, 2, 3];
arr.reverse();
console.log(arr);

// Output: [3, 2, 1]

// ------------------------------------------------------------------------------------------------------



