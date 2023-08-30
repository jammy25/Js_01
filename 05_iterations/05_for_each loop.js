const coding = ["js", "rb", "py", "java", "c++"]

// if we write coding. we get variety of options for array (this is higher order function)
// lets see for each in this


// for each


coding.forEach( function(val) {
    // console.log(val);
})

// another variation for the above code as we use arrow function there

coding.forEach( (item) => {
    // console.log(item);
})

// we can also refer from a function

function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe)


// things we can access via for each

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})


// +++++++++++++++ accessing objects in array via for each +++++++++++++++
// this is very common and imp

// [{}, {}, {}]


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})