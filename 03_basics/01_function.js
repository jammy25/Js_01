function sayMyName() {
  console.log("F");
  console.log("R");
  console.log("A");
  console.log("N");
  console.log("C");
  console.log("I");
  console.log("S");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);

function loginUser (username){
    if (!username){
        console.log('Please enter a username')
        return
    }
    return console.log(`${username} just logged in`);
}
// loginUser("Kishan");
// loginUser();

// ++++++++++++++++ how to enter different parameters in function ++++++++++++++++

// in e-commerce a person adds item in cart and we don't how many number of items are to be entered, and we have to add the price

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 500));

// so we used rest operator (...) to put all the values in num1 and recieve all of them as an array, which can be further used to calculate using loops.

// similar syntax

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 500, 800, 900));

// here val1 and val2 will take 200, 300 rest will go in num1


// Handling obj in a func

const user = {
    username: "Kishan",
    score: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and score is ${anyobject.score}`);
}

// handleObject(user)
handleObject ({
    username: "Nathan",
    score: 100
})


// similarly we can pass Array

const myNewArr = [200, 300, 150, 800]

function handleArr(anyArr){
    console.log(`The second value in the array is ${anyArr[1]}`);
}
handleArr(myNewArr)