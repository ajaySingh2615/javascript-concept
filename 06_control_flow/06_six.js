const myNums = [10, 20, 30, 40, 50, 60, 70, 80];

// const newNums = myNums.map((num) => num + 10);
// console.log(newNums);

// const newNums = myNums
//   .map(function (num) {
//     return num * 10;
//   })
//   .map(function (num) {
//     return num + 1;
//   });

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 400);
console.log(newNums);
