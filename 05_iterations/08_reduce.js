// reduce

const myNums = [1, 3, 5]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

// using arrow function

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal);


// +++++ Excercise +++++

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);