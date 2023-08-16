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

// **********************Operations**********************

let value = 7;
let negValue = -value;
console.log(negValue);

// console.log(2 + 2);
// console.log(3 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2%3);

let str1 = "Hello";
let str2 = " World";
let str3 = console.log(str1 + str2);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log(3 + 4 * 5 % 6);
// console.log(+true);
// console.log(+"");
// let num1, num2, num3;
// num1 = num2 = num 3 = 2 + 1;
// These code work as well but are not good in terms of code readability


let gameCounter = 100;
gameCounter++;
// ++gameCounter;
console.log(gameCounter);
// link to study prefix and postfix increment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment 


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion