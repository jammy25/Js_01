// JS has a prototypal behaviour
// JS never gives up if it does not find something in child it goes to search it in parents then in grandparents and further on... until it reaches null value

// Array or string all are directed to Object which is their parent, there is no further parent of Object it is directed to null

// ARRAY / STRING -> OBJECT -> NULL

// So at the end of the day we can say that in JS everything is an object, concluding that whatever property is available with object is also available with Array/ String. (It is usable or not is a different thing but they inherit the property)

// Now the question is that whether Function also follow the same logic like ARR/STR ?

// Object

function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;
// We use . with obj and since its applied here so we say that func. also follows the same logic

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


// Now that we know that function is object, so is it possible that I can inject some functionality of mine as well? (like in case Array inside prototype we get - slice, push, map etc.)

function createUser(username, score){
    this.username = username
    this.score = score
}

// let's build a function now

createUser.prototype.increment = function(){
    this.score++
}

// Now we create two users and apply the increment method

/*const chai = createUser("chai", 25);
const coffee = createUser("coffee", 250)*/

// Now since here when we call increment method it does not know where to go either increment chai or coffee, that is why in above we use then.score++ instead of only score++ -> here then will give power to use increment whoever has called it.

// Now let's give the func createUser one more prototype

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

// The prototypes has provided properties but when we are using func createUser to transfer that property in chai it won't provide expected result in chai.printMe()

// const chai = createUser("chai", 25);
// const coffee = createUser("coffee", 250)

// So you have to tell that new properties to be added to chai from func createUser and this is done by the keyword 'new'. This is the significance of new and now the code will run

const chai = new createUser("chai", 25);
const coffee = new createUser("coffee", 250)

chai.printMe()


// Functionality of new keyword by - Hitesh

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/