// ES6

class User{
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai', 'chai@ms.com', '123')

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// Behind the scene - when we do not have class 

function user(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user('tea', 'tea@ms.com', '123')

console.log(tea.encryptPassword());
console.log(tea.changeUsername());