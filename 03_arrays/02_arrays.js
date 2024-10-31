const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);

const allHeros = marvel_heros.concat(dc_heros);

// console.log(allHeros);

const marvelAndDcHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5]];
const usable_another_array = another_array.flat(Infinity);
// console.log(usable_another_array);

console.log(Array.isArray("mike"));
console.log(Array.from("mike"));
console.log(Array.from({ name: "mike" })); // intersting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
