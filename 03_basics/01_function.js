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
loginUser();