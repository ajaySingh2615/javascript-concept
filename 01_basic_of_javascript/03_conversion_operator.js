let score = "33";

console.log(typeof score);

let value_in_number = Number(score);
console.log(typeof value_in_number);
console.log(value_in_number);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let is_logged_in = 1;

let boolean_is_logged_in = Boolean(1);
console.log(boolean_is_logged_in);
console.log(typeof boolean_is_logged_in);

// 1 => true
// 0 => false
// "hitesh" => true

let some_number = 33;
let string_number = String(some_number);
console.log(typeof string_number);

console.log("===============OPERATIONS===================");

let value = 3;
let neg_value = -value;
console.log(neg_value);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 2);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " Ajay";
let str3 = str1 + str2;
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

console.log(true);
console.log(+true);
console.log(+"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num1);

let game_counter = 100;
++game_counter;
// console.log(game_counter);

let x = 3;
let y = ++x;
console.log(x);
console.log(y);
