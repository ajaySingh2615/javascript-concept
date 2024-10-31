// singleton

// object literals

const mySym = Symbol("Key1");

const jsUser = {
  name: "mike",
  nickname: "mi",
  [mySym]: "myKey1",
  age: 21,
  location: "jhansi",
  email: "ajay@gmail.com",
  isLoggedIn: true,
  lastLoginDay: ["Monday", "Tuesday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.name = "ajaysingh26@gmail.com";
// console.log(jsUser);

jsUser.geeting = function () {
  console.log("Hello js user");
};
jsUser.geetingTwo = function () {
  console.log(`Hello js user, ${this.name}`);
};
console.log(jsUser.geeting());
console.log(jsUser.geetingTwo());
