// if

// const isUserLoggedIn = true
// const temperature = 41

// if ( temperature < 50 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Executed");

// <, >, ==, !=, <=, >=, ===, !==


// const score = 200

// if ( score > 100 ) {
//     const power = 'fly'
//     console.log(`User Power: ${power}`);
// }
// console.log(power);


// short hand notation for writing if condition

// const balance = 1000;
// if (balance > 500) console.log("test");

// This is called implicit scope, i.e we have considered already the result is in scope


// +++ Nesting +++

/*
const balance = 1000;
if (balance < 500) {
    console.log("balance is less than 500");
} else if (balance < 750) {
    console.log("balance is less than 750");
} else if (balance < 900) {
    console.log("balance is less than 900");
} else {
    console.log("more than 900");
}
*/


const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}