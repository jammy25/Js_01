// Interview Question - Math.PI value is 3.14159...., can you change the value to 4 or 3?

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

// so from here we can see that even if we hard code Math.PI value still the properties will not allow us to overwrite the value, and Math.PI will remain constant

// So we will see a concept called getOwnPropertyDescriptor of object

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// So seeing the console log value we know that PI value is hard code and it can't be changed because writable option is false here.
// can we create something similar with our object, the answer is - Yes.


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(chai);

// Now the question is does these have desciptor properties as well and if yes then how can we set it.

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Now enumerable also is false here meaning we will not be able to put any loop property here

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

// So now you will see that name is not being iterable, if you comment out Object.defineProperty above then again it will become iterable