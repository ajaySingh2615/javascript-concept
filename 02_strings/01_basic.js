const name = "mike";
const repo_count = 50;

console.log(name + repo_count);
console.log(`Hello, my name is ${name} and my repo count is ${repo_count}`);

const game_name = new String("eleven");
console.log(typeof game_name);
console.log(game_name[0]);
console.log(game_name.__proto__);
console.log(game_name.length);
console.log(game_name.toUpperCase());
console.log(game_name.charAt(2));
console.log(game_name.indexOf("t"));

const new_string = game_name.substring(0, 4);
console.log(new_string);

const another_string = game_name.slice(-4, 4);
console.log(another_string);

const new_string_one = "      mike    ";
console.log(new_string_one.trim());
console.log(new_string_one);

const url = "https://hitesh.com/hitesh%20chaudary";
const newUrl = url.replace("%20", "-");
console.log(newUrl);

console.log(url.includes("hitesh"));

const string = new String("Pet-Pet-Pet");
console.log(string.split("-"));
