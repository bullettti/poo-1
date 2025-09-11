// função Pessoa e seus atributos

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
// this cria um novo objeto vazios

// const cria um novo objeto vazio
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 60, "green");

console.log("My father is " + myFather.firstName);
console.log("My mother is " + myMother.firstName);
console.log("My father is " + myFather.nationality);
console.log("My mother is " + myMother.age);
console.log("My mother is " + myMother.eyeColor);

// exemplo com herança de objetos

