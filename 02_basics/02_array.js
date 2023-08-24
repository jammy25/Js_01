const marvel_heros = ["ironman", "strange", "spiderman"]
const dc_heros = ["batman", "flash", "superman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Kishan"));
console.log(Array.from("Kishan"));
console.log(Array.from({name: "Kishan"})); // will provide empty arr, to get result in arr we have to mention specific key or value


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));