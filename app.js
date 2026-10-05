/* Conditions Statement: take Decision */
/* if Statement: if condition is true that run program */
let password = 1234;
if (password === 1234) {
    console.log("Correct!");
}
/* if--else:  if condition is true print this and when the condition is false print this */
// Employee Login System
let isPasswordCorrect = 11223344;
if (isPasswordCorrect === 1234) {
    console.log("Successfully login");
}
else {
    console.log("Incorrect Password");

}

// Online Order Approval
let isPaymentDone = true;
if (isPaymentDone === true) {
    console.log("Approve Order!");

}
else {
    console.log("Rejected Order!");
}

//  Student Result System
let marks = 55;
if (marks >= 50) {
    console.log("Pass");
}
else {
    console.log("Fail");

}

// Office Attendance Check
let isOnTime = true;
if (isOnTime === true) {
    console.log("Present!");
}
else {
    console.log("Late/Absent");

}

// Discount Eligibility
let isPremiumUser = true;
if (isPremiumUser === true) {
    console.log("Discount Applied");
}
else {
    console.log("No Discount");

}

// Employee performance rating system:
let performance = 90;
if (performance >= 90) {
    console.log("Excellent!");
}
else if (performance >= 70) {
    console.log("Good!");

}
else if (performance >= 50) {
    console.log("Average!");

}
else {
    console.log("Poor!");

}

/* switch statement: educate code on the basis of multiple conditions */

let role = prompt("Enter your role");
switch (role) {
    case "admin":
        console.log("Access full Screen");
        break;
    case "manager":
        alert("Team Management Access");
        break;
    case "developer":
        alert("Code Access");
    case "intern":
        alert("Limited Access");
        break;
    default:
        console.log("Something is wrong");
}
