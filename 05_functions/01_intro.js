function sayHello() {
  console.log("Hello");
}

function addTwoNumbers(a, b) {
  return a + b;
}

// sayHello();
result = addTwoNumbers(2, "2");
// console.log(result);

function calculate_cart_price(...num1) {
  return num1;
}

console.log(calculate_cart_price(200, 400, 500));

const user = {
  username: "hitesh",
  prices: 99,
};

function handle_object(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handle_object(user);
