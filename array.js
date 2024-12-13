// Array:- Stores mutiple value in single variable. (index value start with 0)

// Syntax:     let arr[]
//             let arr = new Array()

// Example:

let arr = [101, 112, 103, 104, 105, 106]
console.log(arr);
console.log(arr[3]);

// To Add the Value at any specific point 
arr[99] = 1001;
console.log(arr);
arr[50] = 501;
console.log(arr);

// To Replace value 

arr[1] = 102
console.log(arr);

console.log(typeof arr);
console.log(Array. isArray(arr));
console.log(arr.length);

// Methods:- Push, Pop, Shift, Unshift, Splice 

// PUSH:-

arr.push(107);
console.log(arr);

// POP:-

arr.pop()
console.log(arr);

// SHIFT:-

arr.shift()
console.log(arr);

// UNSHIFT:-

arr.unshift(110)
console.log(arr);

// SPLICE:-

arr.splice(2,2,120)
console.log(arr);


