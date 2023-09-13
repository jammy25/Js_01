// +++++ Object literals +++++ 
// - means literally creating object

const user = {
    username: "Kishan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database")
        // console.log(`username: ${this.username}`);
        // console.log(this);    // will display all things in the func context
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);    
// this -> here is in global context so will return empty space as we have defined nothing here(node environment) in global context
// but if we write it in browser we will recieve a lot of things as browser has window objects in global.


// +++++ Constructor Function +++++
// it allows us to create multiple instance from one object literal, example - new

// const promiseOne = new Promise()
// const myDate = new Date()

// lets create constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User('kishan', 8, true)
// const userTwo = User('hitesh', 12, false)
// console.log(userOne);

// now here the userOne data will get overwrite, and this where the importance of 'new' comes in, when we use 'new' we mean -> give us new instances everytime so that it don't get overwrite similarly in case of promise, date etc.

const userOne = new User('kishan', 8, true)
const userTwo = new User('hitesh', 12, false)
console.log(userOne);


// few lines on when we use 'new' keyword

// #1 - new object is created
// #2 - constructor fun is called bcoz of new keyword
// #3 - injects all arguments(this etc.)
// #4 - we get them in function 