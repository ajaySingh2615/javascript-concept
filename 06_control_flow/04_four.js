const coding = ["js", "py", "java", "c++"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((val) => {
//   console.log(val);
// });

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
];

myCoding.forEach(function (item) {
  console.log(item.languageFile);
});
