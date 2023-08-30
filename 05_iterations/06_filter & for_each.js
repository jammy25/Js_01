// some more discussion on loops

// does for loop return the values which can be stored in a var?

/*
const coding = ["js", "rb", "py", "java", "c++"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})
console.log(values);
*/

// we will use filter in such case, we can use for each as well we will see it after this


// filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);

// in the above case we taken single line arrow func. like ( () => ), we can also take like ( () => ()), or like ( () => {}). But when we consider like the last case then we shoul be aware of the syntax

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);


// using for each to return the value

const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);

// +++++ Excercise +++++

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// check for history books only
  let userBooks = books.filter( (bk) => bk.genre === 'History')
//   console.log(userBooks);

// give me history books published after 1995
  userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);