function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log('called');
}

// function createUser(username, email, password){
    
//     SetUsername(username)
//     this.email = email;
//     this.password = password;
// }

// const user = new createUser('Chai', 'chai@fb.com', '123')
// console.log(user);


// --- So the problem here is that SetUsername when called inside createUser, ther its not getting the access to this of this.username and so the call happening but we are not being able to hold the reference of this ---
// Solution - we have to use .call to hold the reference of 'this' and we have to take that this in current this to hold it inside createUser


function createUser(username, email, password){
    
    SetUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const user = new createUser('Chai', 'chai@fb.com', '123')
console.log(user);


// Conclusion
// *** call passes the current execution context to different function ***