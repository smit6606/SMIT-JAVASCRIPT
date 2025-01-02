/*
Change password logic 

i) old password, new password, confirm passeord
ii) oldpass = newpass => password already used
iii) newwpass = confirmpass => password successfully changed
iv) newwpass != confirmpass => password did not match
*/

let storedPassword = "oldPass123"; // Assume this is the saved password

let oldPass = prompt("Enter Your Old Password...");
if (oldPass === storedPassword) {
    let newPass = prompt("Enter Your New Password...");
    let confPass = prompt("Enter Your Confirm Password...");

    if (newPass === oldPass) {
        console.log("This Password is Already Used.");
    } else {
        if (newPass === confPass) {
            console.log("Password Successfully Changed.");
        } else {
            console.log("New password & Confirm Password Not Matched.");
        }
    }
} else {
    console.log("Incorrect Old Password. Please try again.");
}
