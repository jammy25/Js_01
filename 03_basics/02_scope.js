// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a)
}

// console.log(a);
// console.log(b);

// ++++++++ exploring scope inside a fuction's sunction ++++++++

function one(){
    const username = "Kishan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


// Checking similar concept with 'if' conditionals

if (true) {
    const username = "Kishan"
    if (username === "Kishan") {
        const website = " YouTube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++ Hoisting +++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}

// So the above case runs smoothly whereas the below case which is similar yet since we have hold the value in const, it throws an error. 
// This depends on how we declare a function, its a concept known as Hoisting.

addTwo(5)
const addTwo = function(num){
    return num + 2
}