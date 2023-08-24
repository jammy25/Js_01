// array

const myArr = [0, 1, 2, 3, 4, 5, true, "kishan"]
const myHeroes = ['spiderman', 'iron-man']

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(true));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// Slice, Splice

console.log("A ", myArr);
console.log(myArr.slice(1, 3));

console.log("B ", myArr);
console.log(myArr.splice(1, 3));

console.log("C ", myArr);