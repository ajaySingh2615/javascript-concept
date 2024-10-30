/*
    Primitive data types (non-reference type)
    7 types: String, Number, Boolean, null, undefined, Symbol, BigInt



    Reference type (non - primitive types)
    Array, Objects, Functions
*/

/*
    Stack (Primitive)
    Heap (non -primitive)
*/

let my_youtube_name = "ajay singh";
let another_name = my_youtube_name;
another_name = "chai aur code";
console.log(another_name);
console.log(my_youtube_name);

let user1 = {
  email: "user@google.com",
  upi: "user@ybl",
};

let user2 = user1;

user2.email = "ajay@gamil.com";
console.log(user1.email);
console.log(user2.email);
