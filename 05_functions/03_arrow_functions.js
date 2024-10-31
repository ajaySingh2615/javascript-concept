const user = {
  username: "mike",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "mike";
//   console.log(this.username);
// }

// chai();

const chai = () => {
  let username = "mike";
  console.log(this);
};

// chai();
