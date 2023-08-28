const user = {
    username: "Kishan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to our website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Amit"
// user.welcomeMessage()

// console.log(this);
// In node or deno this shows empty braces but if you run it on browser, it will show different type of window objects which can be used


// +++ let's see what this return inside a func and why it throws undefined if we call the value for this from inside func instead of obj +++


// function chai(){
//     let username = "Kishan"
//     console.log(this.username);
// }
// chai()

// similarly it will throw error in below syntax as well

// const chai = function (){
//     let username = "Kishan"
//     console.log(this.username);
// }


// +++ how to declare func through arrow +++

const chai = () => {
    username = "Kishan"
    console.log(this.username);
}
// chai()


// ++++ Arrow func ++++


// Basic arrow func syntax 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return arrow func syntax

// const addTwo = (num1, num2) => num1 + num2
// can also use the below syntax
// const addTwo = (num1, num2) => (num1 + num2)

// Here obj syntax is as below
// const addTwo = (num1, num2) => ({username: "Kishan"})

console.log(addTwo(3, 5))