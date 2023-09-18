// Oldest syntax to use get set when we have object only

const User = {
    _email: 'k@kks.fb',
    _password: '123abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

console.log(User.email);


// Mostly we get in codebase get_set with class, rarely if we get access to old codebase there we will find func. or obj. based