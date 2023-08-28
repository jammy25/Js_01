// Immediately Invoked Function Expression (IIFE)
// used to avoid globlal scope pollution, and to immediately execute the func

(function code() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

// ()() -> The above syntax

// Similarly for arrow func we use

( () => {
    console.log(`DB CONNECTED TWO`);
} )();

// arrow func with var in iife

( (name) => {
    console.log(`Hello ${name}`);
} )("Kishan");