// ++++ How to create and consume promises ++++

// Creating Promises

const promiseOne = new Promise(function(resolve, reject){
    // We use Promises to do an async task like -
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

// Consuming Promises

promiseOne.then(function(){
    console.log("Promises consumed");
})

// ++++ Different syntax where we call the whole thing in a single part ++++

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asynch task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Asynch 2 resolved");
})

// so here we used .then directly as we did not store promise in a var


// ++++ Now let's say we are reciving data from DB and want to pass that in the promise. How to do that. ++++

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Coffee', email: 'coffee@example.com'})
    }, 1000)
})
// now data is fwd from the above promise after recieving it from DB, now to perform anything on it we have to pass it through .then and we have to see how we will receive it there.
// so we are expecting data thus put receving var in func to receive the obj
promiseThree.then(function(user){
    console.log(user);
})


// ++++ Now let's create promises with error based checking, where we do web request or network request or try to access file where we reply (resolve or reject) accoringly ++++

// To receive reject we will be using catch, this type of method is known as CHAINING, we will also see finally here

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'Kishan', password: '123'});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log('The promise is either resolved or rejected');
})


// ++++ Solving the same above problem, but with different syntax we won't use .then or .catch here instead we will use Asynch Await ++++
// Async await do not handle errors well, so we use try catch along with it.

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = true;
    if (!error) {
        resolve({username: "javascript", password: "js@12"})
    } else {
        reject('Error: JS went wrong')
    }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// ++++ Now let's do the ApiRequest task we did with XMLHttp, with asyn await first and then with .then(), .catch()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()     
        // note we are using await while converting to json as well since it also take times and if we don't add wait there it will throw an error
        // console.log(data);
//     } catch {
//         console.log('E: ', error);
//     }
// }

// getAllUsers()


// by .then() & .catch() method

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log('error')
})