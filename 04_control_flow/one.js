//if
const isUserLoggedIn = true
const temperature = 41

if(temperature < 50){
    console.log("Less than 50");    
} else {
    console.log("Temperature is greater than 50");
}

console.log("Execute");
// <, >, <=, >=,!=, ===, !==

const score = 200

if(score>100) {
    const power = "fly"
    console.log(`User power ${power}`)
}
// this statement -> console.log(`User power is: ${power}`); produces error because of scope


//Example of unreadable code (NOT recommended)
const balance = 1000;
if (balance > 500) console.log("test"),
console.log("test2");

if(balance < 500) {
    console.log("less than 500")
} else if (balance < 750) {
    console.log("less than 750")
} else if (balance < 900) {
    console.log("less than 900")
} else {
    console.log("Less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//&&
if(userLoggedIn && debitCard) {
    console.log("Allowed to buy course");
}

//&&
if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}

//Switch
/*
switch (key) {
    case value:

        break;

    default:
        break;
}
 */

const month = 3

switch (month) {
    case 1:
        console.log("January")        
        break;
    case 2:
        console.log("February")        
        break;
    case 3:
        console.log("March")        
        break;
    case 4:
        console.log("April")        
        break;
    default:
        console.log("Default case match");
        break;
}



