// let score = 33;
// let score = "33";
// let score = "33abc";
// let score = "kishan";
// let score = null;
// let score = undefined;
let score = true;


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// Let's see more on conversionOperation

// let isLoggedIn = 1;
// let isLoggedIn = 0;
// let isLoggedIn = "";
let isLoggedIn = "kishan";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kishan" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);