//prototype  - we can add a new property

function human(name, city) {
  this.name = name;
  this.city = city;
}

function robot(name, country, color) {
  this.name = name;
  this.country = country;
  this.age = 10;
  this.color = color;
}

var Naseba = new human("Naseba", "Paris");
//human(name:"Naseba", city:"Paris")
console.log(Naseba.name); // "Naseba"
console.log(Naseba.city); //"Paris"
console.log(Naseba.country); // undefined

human.prototype = new robot("Naseba", "France", "red");
var Naseba = new human("Naseba", "Paris");
//robot(name:"Naseba", country:"France", age: 10)
console.log(Naseba.country); //("France");
console.log(Naseba.age);
console.log(Naseba.color);
