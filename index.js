console.log("Iniciando um arquivo JavaScript");
// Create an Object
const person = {
  firstName: "Jackson",
  lastName: "Marques",
  age: 30,
  eyeColor: "blue"
};

// Create new Object
const man = Object.create(person);
man.firstName = "Jackson"

console.log(person.firstName  + man.person.firstName);