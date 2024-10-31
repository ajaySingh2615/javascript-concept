const myArr = [0, 1, 2, 3, 4, 5, 6, true, "mike", 0.34];
const myHeroes = ["ironman", "captain america", "spiderman"];
const moreHeroes = new Array("hulk", "superman", "batman");

// console.log(moreHeroes.length);
// console.log(myHeroes[1]);

// Arrays Methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// myArr.unshift("aman");
// myArr.shift();
// console.log(myArr.includes("mike"));
// console.log(myArr.indexOf("mike"));

// const newArr = myHeroes.join();
// console.log(myArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

// slice and splice
console.log("A: ", myArr);
const myn1 = myArr.slice(1, 3);
console.log("myn1: ", myn1);
console.log("B: ", myArr);

console.log("=========================================");

console.log("A: ", myArr);
const myn2 = myArr.splice(1, 3);
console.log("myn2: ", myn2);
console.log("B: ", myArr);
