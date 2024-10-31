function one() {
  const username = "mike";

  function two() {
    const website = "youtube";
    console.log("username: ", username);
  }

  //   console.log("website: ", website);

  two();
}

// one();

// ++++++++++++++++++INTERESTING EXAMPLE++++++++++++++++++++++++
console.log(add_one(5));
function add_one(num) {
  return num + 1;
}

//expression function
console.log(add_two(2));
const add_two = function (num) {
  return num + 2;
};
