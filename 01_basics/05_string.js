const name = 'Kishan';
const repoCount = 19;

// console.log(name + repoCount + "github");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Undying-2");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   kishan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kishan.com/kishan%20singh/"

console.log(url.replace("%20", "_"));

console.log(url.includes("kishan"));

console.log(url.split("/"));