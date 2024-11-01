const nums = [1, 2, 3];

// const total = nums.reduce(function (acc, curr) {
//   return acc + curr;
// }, 0);

const total = nums.reduce((acc, curr) => acc + curr, 0);

console.log(total);

const shopping_cart = [
  {
    itemName: "js course",
    price: 3999,
  },
  {
    itemName: "python course",
    price: 5999,
  },
  {
    itemName: "java course",
    price: 7999,
  },
];

const priceToPay = shopping_cart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
