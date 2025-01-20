// JSON :- Javascript Object Notation



let Company = '{"employees" : [' +
    '{"firstname":"Smit","lastname":"Garala"},' +
    '{"firstname":"Jeet","lastname":"Garala"},' +
    '{"firstname":"Krishna","lastname":"Bariya"},' +
    '{"firstname":"Vraj","lastname":"Kaneria"}]}';

const obj = JSON.parse(Company);

let output = "";
for (let i = 0; i < obj.employees.length; i++) {
    output += obj.employees[i].firstname + " " + obj.employees[i].lastname + "<br/>";
}

document.getElementById("demo").innerHTML = output;


// JavaScript Object to JSON:

const person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

const jsonString = JSON.stringify(person1);

console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}

// JSON to JavaScript Object:

const person2 = '{"name":"Smit", "age":24, "city":"Surat"}';

const javaobject = JSON.parse(person2);

console.log(javaobject.name);
console.log(javaobject.age);
console.log(javaobject.city);

let Details = {
    name: "Smit Garala",
    age: 24,
    email: "smeetgarala6606@gmail.com",
    hobbies: ["cricket", "badminton", "football", "kabbadi"]
};

localStorage.setItem('userInfo', JSON.stringify(Details));

console.log("User details saved to local storage!");

let userInfo = localStorage.getItem('userInfo');

userInfo = JSON.parse(userInfo);

console.log(userInfo.name);
console.log(userInfo.age);
console.log(userInfo.email);

sessionStorage.setItem('sayHello', JSON.stringify(Details));

