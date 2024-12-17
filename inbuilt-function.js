// JavaScript has a variety of built-in functions and methods that are commonly used in everyday programming.
//  Below is a comprehensive list of these built-in functions based on their functionality.

// 1. Math Functions :- "JavaScript provides several mathematical methods under the Math object:"

// - Math.abs(x) – Returns the absolute value of x.
// - Math.ceil(x) – Returns the smallest integer greater than or equal to x.
// - Math.floor(x) – Returns the largest integer less than or equal to x.
// - Math.round(x) – Rounds x to the nearest integer.
// - Math.random() – Returns a random number between 0 (inclusive) and 1 (exclusive).
// - Math.max(a, b, c, ...) – Returns the largest of the provided numbers.
// - Math.min(a, b, c, ...) – Returns the smallest of the provided numbers.
// - Math.pow(base, exponent) – Returns base raised to the power of exponent.
// - Math.sqrt(x) – Returns the square root of x.
// - Math.sin(x) – Returns the sine of x (x in radians).
// - Math.cos(x) – Returns the cosine of x (x in radians).
// - Math.tan(x) – Returns the tangent of x (x in radians).
// - Math.PI – The value of Pi (approximately 3.14159).
// - Math.E – The base of the natural logarithm (approximately 2.71828).



// 2. String Functions :- "JavaScript provides several useful string methods:"

// - String.toLowerCase() – Converts a string to lowercase.
// - String.length – Returns the length of a string.
// - String.toUpperCase() – Converts a string to uppercase.
// - String.trim() – Removes whitespace from both ends of a string.
// - String.charAt(index) – Returns the character at the specified index.
// - String.indexOf(searchValue) – Returns the index of the first occurrence of searchValue.
// - String.lastIndexOf(searchValue) – Returns the index of the last occurrence of searchValue.
// - String.slice(start, end) – Extracts a part of a string between start and end.
// - String.substring(start, end) – Similar to slice, but will not accept negative indexes.
// - String.replace(searchValue, newValue) – Replaces the first occurrence of searchValue with newValue.
// - String.split(separator) – Splits a string into an array of substrings based on a separator.
// - String.concat(str1, str2, ...) – Combines two or more strings.
// - String.includes(searchValue) – Returns true if the string contains searchValue.
// - String.startsWith(searchValue) – Returns true if the string starts with searchValue.
// - String.endsWith(searchValue) – Returns true if the string ends with searchValue.
// - String.repeat(count) – Returns a new string with the specified number of repetitions.



// 3. Array Functions :- "Arrays in JavaScript have many built-in methods:"

// - Array.length – Returns the number of elements in an array.
// - Array.push(element) – Adds one or more elements to the end of an array.
// - Array.pop() – Removes the last element from an array.
// - Array.shift() – Removes the first element from an array.
// - Array.unshift(element) – Adds one or more elements to the beginning of an array.
// - Array.indexOf(element) – Returns the index of the first occurrence of element.
// - Array.includes(element) – Returns true if element is in the array.
// - Array.slice(start, end) – Returns a shallow copy of a portion of an array.
// - Array.splice(start, deleteCount, item1, item2, ...) – Adds/removes elements from an array.
// - Array.concat(array2) – Combines two or more arrays.
// - Array.join(separator) – Joins all elements of an array into a single string.
// - Array.sort() – Sorts the array in place.
// - Array.reverse() – Reverses the order of elements in an array.
// - Array.forEach(callback) – Executes a function for each array element.
// - Array.map(callback) – Creates a new array with the results of applying a function to each element.
// - Array.filter(callback) – Creates a new array with elements that pass the test.
// - Array.reduce(callback, initialValue) – Applies a function against an accumulator and reduces the array to a single value.
// - Array.find(callback) – Returns the first element that passes the test.
// - Array.findIndex(callback) – Returns the index of the first element that passes the test.
// - Array.every(callback) – Tests whether all elements pass the test.
// - Array.some(callback) – Tests whether at least one element passes the test.



// 4. Object Functions :- "JavaScript provides methods for handling objects:"

// - Object.keys(obj) – Returns an array of the object's own enumerable property names.
// - Object.values(obj) – Returns an array of the object's own enumerable property values.
// - Object.entries(obj) – Returns an array of the object's own enumerable property [key, value] pairs.
// - Object.assign(target, ...sources) – Copies the values of all properties from source objects to the target object.
// - Object.freeze(obj) – Freezes an object, preventing modification.
// - Object.isFrozen(obj) – Returns true if the object is frozen.
// - Object.hasOwnProperty(property) – Returns true if the object has the specified property.
// - Object.defineProperty(obj, prop, descriptor) – Defines a new property or modifies an existing one.
// - Object.getOwnPropertyDescriptor(obj, prop) – Returns a property descriptor for an object's property.
// - Object.create(proto) – Creates a new object with the specified prototype object.



// 5. Date Functions :- "JavaScript's Date object has many methods for working with dates and times:"

// - new Date() – Returns the current date and time.
// - new Date(milliseconds) – Creates a new date object from the specified number of milliseconds.
// - Date.now() – Returns the current timestamp (milliseconds since January 1, 1970).
// - Date.getFullYear() – Returns the year (4 digits).
// - Date.getMonth() – Returns the month (0-11).
// - Date.getDate() – Returns the day of the month (1-31).
// - Date.getDay() – Returns the day of the week (0-6).
// - Date.getHours() – Returns the hours (0-23).
// - Date.getMinutes() – Returns the minutes (0-59).
// - Date.getSeconds() – Returns the seconds (0-59).
// - Date.getMilliseconds() – Returns the milliseconds (0-999).
// - Date.getTime() – Returns the time in milliseconds since January 1, 1970.
// - Date.setFullYear(year) – Sets the year of the date.
// - Date.setMonth(month) – Sets the month of the date.
// - Date.setDate(day) – Sets the day of the month of the date.
// - Date.setHours(hours) – Sets the hours of the date.
// - Date.setMinutes(minutes) – Sets the minutes of the date.
// - Date.setSeconds(seconds) – Sets the seconds of the date.
// - Date.setMilliseconds(milliseconds) – Sets the milliseconds of the date.



// 6. JSON Functions :- "JavaScript provides built-in methods for handling JSON:"

// - JSON.stringify(value) – Converts a JavaScript value to a JSON string.
// - JSON.parse(text) – Parses a JSON string and returns the corresponding JavaScript object.



// 7. Global Functions :- "Some useful global functions in JavaScript:"

// - parseInt(value, radix) – Parses a string and returns an integer based on the specified radix (base).
// - parseFloat(value) – Parses a string and returns a floating-point number.
// - isNaN(value) – Returns true if the value is NaN (Not-a-Number).
// - isFinite(value) – Returns true if the value is a finite number.
// - decodeURIComponent(uri) – Decodes a URI component.
// - encodeURIComponent(uri) – Encodes a URI component.
// - eval(expression) – Evaluates a string as JavaScript code (use with caution).
// - setTimeout(callback, delay) – Executes the callback function after a specified delay in milliseconds.
// - setInterval(callback, delay) – Executes the callback function repeatedly after a specified delay in milliseconds.
// - clearTimeout(timeoutID) – Clears the timeout set by setTimeout().
// - clearInterval(intervalID) – Clears the interval set by setInterval().