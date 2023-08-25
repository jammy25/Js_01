// singleton

// const tinderUser = new Object()
const tinderUser = {}

// both return object, there is no internal diff. except that line 3 is a singleton obj whereas line 4 is not.

tinderUser.id = "123abc",
tinderUser.name = "Charlie",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// Let's take another example where we obj inside obj

const regularUser = {
    email: "charlie@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Kishan",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// another syntax to return value, this is mostly we see when we get values from database
const user = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
]

// console.log(user[1].email);

// we can fetch all keys from an obj using the below syntax
// This syntax is very crucial as it returns all the keys inside an array, which can be further used ~ very helpful while using db

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// sometimes we need to check some property but we are not sure whether it exist or not so we can use the below method to check without crashing

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


// destructuring in obj

const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh" 
}

// console.log(course.courseInstructor);
// This is perfectly fine, but we can use diff syntax as well

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// json format related to object

// {
//     "name": "Kishan",
//     "coursename": "Js",
//     "price": "Free"
// }

// json format in an array

// [
//     {},
//     {},
//     {},
// ]