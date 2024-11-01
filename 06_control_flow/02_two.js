// for loop
// break keyword
// continue keyword
// while loop
// do-while loop

// High order loops

// for of loop
const arr = [10, 20, 30, 40];

for (const item of arr) {
  //   console.log(item);
}

const greeting = "Hello!";
for (const greet of greeting) {
  //   console.log(greet);
}

// Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of america");
map.set("Fr", "France");

for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
