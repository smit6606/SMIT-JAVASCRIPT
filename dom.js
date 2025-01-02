// DOM = "Document Object Model"

/*
    1. getElementById
    2. getElementByTagName
    3. getElementByClassName
    4. querySelector & querySelectorAll
*/
// Using Id 
let h2 = document.getElementById("js"); // getElementById
console.log(h2);
h2.innerHTML = 'JavaScript...!';
h2.style.color = 'red';

// Adding Attribute
h2.setAttribute('class', 'sms');

// Using Class Name 
let H2 = document.getElementsByClassName("sms")[0]; // getElementByClassName
H2.innerHTML = "I'm Learning Javascript.";

// Using Tag Name 
function myFunction() {
    let list = document.getElementsByTagName("UL")[0];
    list.getElementsByTagName("li")[0].innerHTML = "Milk";
    list.style.color = "blue";
    list.style.fontSize = "30px";
}

// Using Query Selector 
let p = document.querySelector(".msg"); // querySelector
p.style.color = 'orange';

// Using QuerySelectorAll
let name = document.querySelectorAll(".name");
name.forEach(element => {
    element.style.fontSize = "50px";
});