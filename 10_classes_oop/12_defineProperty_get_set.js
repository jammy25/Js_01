// Old syntax or we can say how get & set were defined via properties
// funtion based syntax

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

    // similarly we can set email as well

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
})        
}

const chai = new User('chai@fb.com', "123abc")
console.log(chai.password);
console.log(chai.email);