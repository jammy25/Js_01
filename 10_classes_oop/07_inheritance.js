class user{
    constructor(username){
        this.username = username
    }

    logMe = function(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@google.com', '123')
chai.addCourse()

const tea = new user('masalaTea')
tea.logMe()

// here Tea does not have access to Teacher as it created by user and user does not inherit Teacher

console.log(tea === chai);

// To check wheter chai is made from Teacher we have a method called - instanceof

console.log(chai instanceof Teacher);
console.log(chai instanceof user);