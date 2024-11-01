const myObject = {
  js: "Javascript",
  cpp: "c++",
  java: "java",
  py: "python",
};

// for in loop

for (const key in myObject) {
  console.log(`${key} : ${myObject[key]}`);
}

const myHeros = ["superman", "spiderman", "batman", "wonder women"];
for (const key in myHeros) {
  console.log(myHeros[key]);
}
