// for in

// objects

const myObj = {
    js: 'javascript',
    py: 'python',
    cpp: 'C++',
    rb: 'ruby'
}

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
}


// array

const programmingLang = ["js", "rb", "py", "java", "c++"]

for (const key in programmingLang) {
    // console.log(programmingLang[key]);
}


// Maps

// const map = new Map()
// map.set('IN', 'India')
// map.set('UK', 'United Kingdom')
// map.set('Fr', 'France')
// map.set('IN', 'India')

// for (const key in map) {
//     console.log(key);
// }

// map is not iterable by for in loop