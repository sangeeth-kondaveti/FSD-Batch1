//var is hoisted and let, const does not allow hoisting

let a = 20;
console.log(a);
//20

console.log(b); //undefined
var b = 20;

//scope
// 1. Global scope -
// 2. Local Scope
//block -{}
function greet() {
  var x = 30;
  console.log(a + x); //50
}

greet(); //20
console.log(a + x); //error
