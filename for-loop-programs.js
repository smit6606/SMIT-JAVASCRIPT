// continue statement => for, while, do while, for in, for of.
/*
syntax:- 

    for(initialize; condition; increments/ decrements/ Expression){
        statement.....
    }
        
    initialize = Normally you will initialize the variable used in the loop (let i = 0). (for starting loop)
    condition = Often is used to evaluate the condition of the initial variable(let i < n) / (let i > n). (for break loop)
    increments/ decrements/ Expression => Often expression increments the value of the initial variable. (for continues loop)
*/


// For LOOP Programs

// i) Print out 10 to 1

// let i;
// for(i = 10; i > 0; i--){
//     console.log(i);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// ii) Print out 51 to 79

// let j;
// for(j = 51; j <= 79; j++){
//     console.log(j);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// iii) Enter n and print out 1 to n

// let k;
// let n = Number(prompt("Enter the value of n"));
// for(k = 1; k <=n; k++){
//     console.log(k);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// iv) Enter n and print out -n to 1

// let n = Number(prompt("Enter The Number of n"));

// for (let i = -n; i <= 1; i++) {
//     console.log(i);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// v) Enter n and print out -n to n

// let n = Number(prompt("Enter The Number of n"));

// for (let i = -n; i <= n; i++) {
//     console.log(i);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// vi) Enter n and print out odd number upto n

// let n = Number(prompt("Enter The Number of n"));

// for(let i = 1; i <= n; i+=2){
//     console.log(i);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// vii) Enter n and print out even number upto n

// let n = Number(prompt("Enter The Number of n"));

// for(let i = 0; i <= n; i+=2){
//     console.log(i);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// viii) Series print out 1, 4, 3, 16, 5, 36.......

// for (let i = 1; i <= 10; i++) {
//     console.log(i % 2 === 0 ? i * i : i);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// ix) Series print out 1, 1, 2, 3, 5, 8 .....
// let a = +prompt("Enter a Number :");
// let x = 0; y = 1;
// let z;

// Method : 1

// for(let i = 0; i <= a; i++){
//     console.log(x);
//     z = x + y;
//     x = y;
//     y = z;
// }

// Method : 2

// for(let i = 1; i <= a; i++){
//     if(i == 1){
//         console.log(x);
//     }else if(i == 2){
//         console.log(y);
//     }else{
//         z = x + y;
//         x = y;
//         y = z;
//         console.log(z);
//     }
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// x) Series print out 1, 4, 12, 32, 80, 192, 448 .......

// let n = 10;
// let first = 1;
// let second = 4;

// console.log(first);
// console.log(second);

// for (let i = 3; i <= n; i++) {
//     let next = (second - first) * 4;
//     console.log(next);
//     first = second;
//     second = next;
// }

// ---------------------------------------------------------------------------------------------------------------------------------










