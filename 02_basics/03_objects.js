// Objects are created by two methods - #singleton, #object literals

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Kishan",
    "full Name": "Kishan Kumar Singh",
    [mySym]: "myKey1",
    age: 18,
    location: "Bangalore",
    email: "kishan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    
}

// Access

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

// Change

JsUser.email = "Kishan@hotmail.com"
// Object.freeze(JsUser)
JsUser.email = "Kishan@chatgpt.com"

// console.log(JsUser);

// Declare Function inside Object

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name} this side`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
JsUser.greeting()
JsUser.greetingTwo()