// Task - function is carrying a name of 6 letters and 5 spaces, we need to develop a method which trim the spaces and only counts the letter...(do not use trim function as that is not the purpose of this question, we are taking it to understand prototype)

// So we will develop a trueLength method which will trim down the spaces and give the length of string

// let myName = "kishan     "
// let myDrink = "Chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.kishan = function(){
    console.log(`kishan is now present in all objects`);
}

// so i have introduced prototype kishan inside object, which means it now inside function, arr, str, ...

// heroPower.kishan()
myHeros.kishan()

// Now lets see if we inject prototype inside Array will it be inside object and we access it from function, str, etc.

Array.prototype.heyKishan = function(){
    console.log(`Kishan says hello`);
}

myHeros.heyKishan()
// heroPower.heyKishan() 

// So function cannot access heyKishan prototype


// ++++ Inheritance ++++

const User = {
    name: "chai",
    email: "chai@google.com"
} 

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: 'JS Assignments',
    fullTime: true,
    __proto__: TeachingSupport
}

// __proto__ will provide you property access to different object
// You can do __proto__ from outside as well

Teacher.__proto__ = User

// This is called prototypal inheritance, this is an outdated method which you won't find in new codebases

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


// Now to our task solution

let anotherUsername = "Chai&code      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"kishan".trueLength();
"iceTea".trueLength();

// here this is taking the context name