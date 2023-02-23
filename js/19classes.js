//class - blueprint for the object
//create an object

//constructor function

function Person() {
  (this.name = "John"), (this.age = 20);
}

//creating an object

const person1 = new Person();
person1.name; // John
person1.age; // 20

//creating a class
class Person1 {
  constructor(name) {
    this.name = name;
  } //defining method =  function
  greet() {
    console.log(`Say Hi to ${this.name}`);
  }
}

//creating an object

const person2 = new Person1("John");
const person3 = new Person1("Jack");

console.log(person2.name); //John
console.log(person3.name); //Jack
//accessing method
console.log(person2.greet()); //Say Hi to John
console.log(person3.greet()); //Say Hi to Jack

//getter and setter methods
// getter - get value of an object
// setter - set value of an object

class Person2 {
  constructor(name) {
    this.name = name;
  }
  //getter
  get personName() {
    return this.name;
  }

  //setter
  set personName(x) {
    this.name = x;
  }
}

//create object
let UpdatedName = new Person2("Jack");
console.log(UpdatedName.name); //Jack

//changing the value of the name property
UpdatedName.personName = "Mick";
console.log(UpdatedName.name); //Mick
