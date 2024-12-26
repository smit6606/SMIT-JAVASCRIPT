let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")
let gender = document.getElementById("gender")
let password = document.getElementById("password")
let hobbies = document.getElementById("hobbies")
let dob = document.getElementById("dob")

let form = document.querySelector("#formvalidation")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event)
    console.log(fname.value)
    console.log(lname.value)
    console.log(email.value)
    console.log(gender.value)
    console.log(password.value)
    console.log(hobbies.value)
    console.log(dob.value)

})
