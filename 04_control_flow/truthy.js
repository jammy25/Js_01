// const useremail = "kishan@amz.com"
// const useremail = ""
const useremail = []

if (useremail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt -> 0n, "", null, undefined, NaN

// truthy values

// values other than falsy values are truthy values
// few values which can suprise you as truthy valus include -

// "0", 'false', " ", [], {}, function(){} 


// How to check empty array
/*
const myArray = []
if (myArray.length === 0){
    console.log("Array is empty");
}
*/

// How to check Obj

/*
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
*/

// Object.keys(emptyObj) -> returns an array


// ++++++++++++++ Nullish Coalescing Operator (??): null undefined ++++++++++++++

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 20
val1 = null ?? 18 ?? 22

console.log(val1);

// ++++++++++++++ Terniary Operator ++++++++++++++

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");;