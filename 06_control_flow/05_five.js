const heros = ["superman", "ironman", "spiderman", "thor"];

// const values = heros.forEach((item) => {
//   console.log(item);
// });

// console.log(values);

const nums = [10, 20, 30, 40, 50, 60];

// const newNums = nums.filter((num) => num > 4);
// console.log(newNums);

// const newNums = [];
// nums.forEach((num) => {
//   if (num > 4) newNums.push(num);
// });

// console.log(newNums);

let books = [
  {
    title: "The Silent Sea",
    genre: "Science Fiction",
    publish: 2020,
    edition: "First",
  },
  {
    title: "Mystery of the Mind",
    genre: "Mystery",
    publish: 2015,
    edition: "Second",
  },
  {
    title: "The Journey Within",
    genre: "Self-Help",
    publish: 2018,
    edition: "First",
  },
  {
    title: "Galactic Tales",
    genre: "Fantasy",
    publish: 2021,
    edition: "Third",
  },
  {
    title: "Culinary Delights",
    genre: "Cooking",
    publish: 2019,
    edition: "Second",
  },
];

const userBooks = books.filter((bk) => bk.genre === "Cooking");

console.log(userBooks);
