/*

1. Enter Electricity UNIT and Calculate amount to pay

For first 50 units, Rs: 1/unit

For next 100 units, 2/unit

For next 100 units, 3/ units

For units above 250, 4/units

For all bills above 150 units an additional surcharge of 20% of total bill amount is added.

*/

let unitsConsumed = Number(prompt("Enter the number of units consumed: "));
let totalamount = 0;
let surcharge = 0;

if (unitsConsumed >= 0 && unitsConsumed <= 50) {
    totalamount += unitsConsumed * 1;
} else if (unitsConsumed <= 150) {
    totalamount += 50 * 1 + (unitsConsumed - 50) * 2;
} else if (unitsConsumed <= 250) {
    totalamount += 50 * 1 + 100 * 2 + (unitsConsumed - 150) * 3;
} else {
    totalamount += 50 * 1 + 100 * 2 + 100 * 3 + (unitsConsumed - 250) * 4;
}

if (unitsConsumed > 150) {
    surcharge = totalamount * 0.20;
}

totalamount += surcharge;

alert(`Surcharge: Rs. ${surcharge}\nBill Amount: Rs. ${(totalamount - surcharge)}\nTotal Bill: Rs. ${totalamount}`);

/*

Output:-    When unit value is 300

            Surcharge: Rs. 150

            Bill Amount: Rs. 750

            Total Bill: Rs. 900
*/

// -----------------------------------------------------------------------------------------------------------------------------------

/*

2. Write a JAVASCRIPT Program to print season according user input using switch case. (eg. 1 to 4 for "Winter", 5 to 8 for "Summer", 9 to 12 "Monsoon" then add any number print "Invalid season" etc.)

*/

let Season = Number(prompt("Enter a Number (1-12): "));

switch (Season) {
    case 12:
    case 1:
    case 2:
    case 3:
        alert("Winter Season");
        break;

    case 4:
    case 5:
    case 6:
    case 7:
        alert("Summer Season");
        break;

    case 8:
    case 9:
    case 10:
    case 11:
        alert("Monsoon Season");
        break;

    default:
        alert("Please enter a valid number (1-12).");
}

/*

Output:-  If the user enters number : 3

        Winter Season

*/

// -----------------------------------------------------------------------------------------------------------------------------------

/*

3. Write a JAVASCRIPT Program to find rate based on year and calculate total interest using nested if (IPRN/100) Principal Amount (P) Interest Rate No. of Years (N) (if 3<N-5 then R is 3 | if 5<N-8 then R is 5 | if 8<N<=12 then R is 12 else R is 15)

*/

let amount = Number(prompt("Enter Principal Amount (P): "));
let years = Number(prompt("Enter Number of Years (N): "));
let rate;

if (years > 3 && years <= 5) {
    rate = 3;
} else if (years > 5 && years <= 8) {
    rate = 5;
} else if (years > 8 && years <= 12) {
    rate = 12;
} else {
    rate = 15;
}

let interest = (amount * rate * years) / 100;

alert(
    `Principal Amount: Rs. ${amount}\n` +
    `Interest Rate: ${rate}%\n` +
    `Number of Years: ${years}\n` +
    `Total Interest: Rs. ${interest}`
);

/*

Output:- If the user enters amount = 10000 and years = 6:

        Principal Amount: Rs. 10000
        Interest Rate: 5%
        Number of Years: 6
        Total Interest: Rs. 3000

*/

// ---------------------------------------------------------------------------------------------------------------------------------

/*

4. Write a JAVASCRIPT Program to check Voting Eligibility

*/

let ages = prompt("Enter Your Age");
let message;
if (ages > 0 && ages < 18) {
    message = "You are not eligible to vote....";
} else if (ages <= 0 || isNaN(ages)) {
    message = "Please enter a valid age number";
} else {
    message = "You can vote....";
}
alert(message)

/*

Output:- If the user enters age = 35:

        You can vote....

*/

// ---------------------------------------------------------------------------------------------------------------------------------

/*

5. Write a JAVASCRIPT Program to Classify Age Groups

*/

let age = Number(prompt("Enter Your Age"));

if (age >= 0 && age <= 12) {
    alert(`${age} - You are a Small Cute Child.`);
} else if (age >= 13 && age <= 19) {
    alert(`${age} - You are a Teenager.`);
} else if (age >= 20 && age <= 64) {
    alert(`${age} - You are a Handsome Young Person.`);
} else if (age >= 65) {
    alert(`${age} - You are a Very Old Person.`);
} else {
    alert("Invalid Age Entered.");
}

/*

Output :- If the user enters age = 35:

        35 - You are a Handsome Young Person.

*/

// ----------------------------------------------------------------------------------------------------------------------------------

