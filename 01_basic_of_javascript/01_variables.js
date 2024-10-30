const account_id = 144333;
let account_email = "ajay@gmail.com";
var account_password = "12334";
account_city = "Jaipur";
let accountState;

// account_id = 2; not allowed

account_email = "hc@gmail.com";
account_password = "shiv";
account_city = "jhansi";

console.log(account_id);

/*
    prefer not to use var
    because of issue of block scope and functional scope
*/

console.table([
  account_id,
  account_email,
  account_password,
  account_city,
  accountState,
]);
