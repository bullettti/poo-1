const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};

delete person.age;

console.log("o nome e " + person.firstname + " a idade e " + person.age);

// Se quiser criar outro objeto, use outro nome de variável:
const person2 = {
  firstname: "John",
  lastname: "e",
  age: 50,
  eyecolor: "blue"
};

delete person2.age;