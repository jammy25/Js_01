// for of

// ["", "", ""] -> Strings in an arr
// [{}, {}, {}] -> Objects in an arr


// number
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

// string
const greeting = "Hello World"

for (const greet of greeting) {
    // console.log(`Characters are ${greet}`);
}

// maps

// let's first discuss Maps

const map = new Map()
map.set('IN', 'India')
map.set('UK', 'United Kingdom')
map.set('Fr', 'France')
map.set('IN', 'India')

// console.log(map);

// now let's see how for of works on maps

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}


// Object

// const myObj = {
//     "game1" : "LOU",
//     "game2" : "GOW"
// }

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }


// Object is not iterable like this. It can be looped but not with for of