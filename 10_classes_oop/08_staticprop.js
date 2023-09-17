class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}


const kishan = new User('kishan')
// console.log(kishan.createId())


// Now there will be time when you don't want to give access of a particular method(say creatId) to all the objects that has been inherited from that class...
// so in that case we use static keyword
// This will be true even when we extend the property to diff class


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const chai = new Teacher('chai', 'chai@google.com')
console.log(chai.createId());
// chai.logMe()