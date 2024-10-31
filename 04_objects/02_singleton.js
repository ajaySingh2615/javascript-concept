const tinderUser = new Object();

tinderUser.id = "123ABC";
tinderUser.name = "mike";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "mike@gmail.com",
  fullName: {
    firstName: "mike",
    lastName: "lone",
  },
};

console.log(regularUser.fullName.firstName);

const a = {
  1: "a",
  2: "b",
};

const b = {
  3: "c",
  4: "d",
};

const c = { ...a, ...b };
console.log(c);

const users = [
  { id: 1, email: "ajay1@gmail.com" },
  { id: 2, email: "ajay2@gmail.com" },
  { id: 3, email: "ajay3@gmail.com" },
];

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));
console.log(tinderUser.hasOwnProperty("names"));
