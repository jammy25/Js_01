// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const BigNumber = 46459843165876n;

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "dhruv"]

let myObj = {
    name: "Kishan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}


// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYouTubeName = "kishandotcom"

let anotherName = myYouTubeName
anotherName = "codingChannel"

console.log(myYouTubeName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ibi"
}

let userTwo = userOne

userTwo.email = "kishan@google.com"

console.log(userOne.email);
console.log(userTwo.email);