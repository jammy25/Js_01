class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
}

const kishan = new User('k@kishan.ai', '123')
console.log(kishan.password);

// Now in many scenarios we need fine gain control i.e, if someone asks me password I return encrypted pw or pw can't be shared. Often we make classes whose properties access we don't want to share with everyone or customise the code if someone wants it.
// for these type of cases we have getters and setters

// say in the above case we don't want to give pw access to anybody then how will i throw an error msg to them

// getter and setter are available by default in all classes, so easier way to implement them is - whatever property you have in your class you can apply getter/setter on them as when you create these property by default get and set are created for them



class User1 {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    // suppose someone wants to get password then this is how you return what you want to return

    get password(){
        // return `${this.password}.kishan`
        return `${this.password_1}.kishan`
    }

    // whenever you give get you also have to give set, for understanding purpose see it like - from pov of outside console you are giving him what to get then it will need what to set

    set password(value){
        // return this.password = value
        return this.password_1 = value
    }


    // Here are two things to learn

    // 1. set and get actually sets the property and this is also done by constructor so going with comment return we will set the terminal to an endless loop(known as race condition) where both construcor and get_set will try to overwrite password throwing an error - Maximum call stack size exceeded
    // solution - after getting the value from constructor we store it in a diff variable name inside get_set

    // 2. another thing to learn how we are showing and storing the value get set give us this advantage to show the user modified string while storing the original - like in the above case get will show user that pw is - 123abc.kishan whereas set will store the value as 123abc


}

const anjani = new User1('a@anjani.google', '123abc')
console.log(anjani.password);
