const form = document.getElementById("registerForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const dob = document.getElementById("dob");
const hobbies = document.getElementById("hobbies");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
        saveData();
        loadData();
        form.reset();
        clearErrors();
    }
});

function validateForm() {
    let isValid = true;

    // Validate first name
    if (fname.value.trim() === "") {
        document.getElementById("fnameErr").innerHTML = "First name is required";
        isValid = false;
    } else if (fname.value.length < 3) {
        document.getElementById("fnameErr").innerHTML = "First name must be at least 3 characters";
        isValid = false;
    } else {
        document.getElementById("fnameErr").innerHTML = "";
    }

    // Validate last name
    if (lname.value.trim() === "") {
        document.getElementById("lnameErr").innerHTML = "Last name is required";
        isValid = false;
    } else if (lname.value.length < 3) {
        document.getElementById("lnameErr").innerHTML = "Last name must be at least 3 characters";
        isValid = false;
    } else {
        document.getElementById("lnameErr").innerHTML = "";
    }

    // Validate email
    if (email.value.trim() === "") {
        document.getElementById("emailErr").innerHTML = "Email is required";
        isValid = false;
    } else {
        document.getElementById("emailErr").innerHTML = "";
    }

    // Validate password
    if (pass.value === "") {
        document.getElementById("passErr").innerHTML = "Password is required";
        isValid = false;
    } else if (
        pass.value.length < 8 ||
        !/[A-Z]/.test(pass.value) ||
        !/[a-z]/.test(pass.value) ||
        !/[0-9]/.test(pass.value) ||
        !/[!@#$%^&*]/.test(pass.value)
    ) {
        document.getElementById("passErr").innerHTML =
            "Password must have 8+ characters, uppercase, lowercase, digit, and special character";
        isValid = false;
    } else {
        document.getElementById("passErr").innerHTML = "";
    }

    // Validate date of birth
    if (dob.value === "") {
        document.getElementById("dobErr").innerHTML = "Date of birth is required";
        isValid = false;
    } else {
        document.getElementById("dobErr").innerHTML = "";
    }

    // Validate hobbies
    if (hobbies.value === "") {
        document.getElementById("hobbiesErr").innerHTML = "Please select a hobby";
        isValid = false;
    } else {
        document.getElementById("hobbiesErr").innerHTML = "";
    }

    // Validate gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderErr").innerHTML = "Gender is required";
        isValid = false;
    } else {
        document.getElementById("genderErr").innerHTML = "";
    }

    return isValid;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach((el) => (el.innerHTML = ""));
}

function saveData() {
    let oldDetails = JSON.parse(localStorage.getItem("details")) || [];
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let newDetails = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        dob: dob.value,
        hobby: hobbies.value,
        gender: gender,
    };

    oldDetails.push(newDetails);
    localStorage.setItem("details", JSON.stringify(oldDetails));
}

function loadData() {
    let details = JSON.parse(localStorage.getItem("details")) || [];
    let result = "";

    details.forEach((detail, index) => {
        result += ` <tr>
                        <td>${index + 1}</td>
                        <td>${detail.fname}</td>
                        <td>${detail.lname}</td>
                        <td>${detail.email}</td>
                        <td>${detail.dob}</td>
                        <td>${detail.hobby}</td>
                        <td>${detail.gender}</td>
                    </tr>`;
    });

    document.querySelector("#viewDetails tbody").innerHTML = result;
}

// Load data on page load
loadData();
