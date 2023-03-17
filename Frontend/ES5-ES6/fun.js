//scope - lifetime of a var
//block - let, const  - {}

{
  let y1 = 10;
  var y2 = 20;
}
//console.log(y1); //Uncaught ReferenceError: y1 is not defined
console.log(y2);

//not defined(error) vs undefined(value)

//can a block hold a var or will it leak outside?

//shadowing
var price = 1000; //Pant

function getPrice() {
  console.log("The old price is", price);
  var price = 500; //MSD
  console.log("The new price is ", price);
}
getPrice();

console.log(a);
var a = 50;
console.log(a);

//JS  - Does compilation happens? Yes
//code - binary(byte code)
//JIT - Just In Time Compilation
//1. Compilation Phase - console => skip
//2. Execution Phase
//JS & Context

//Example 1 with var
//1. Compilation Phase

console.log(a); //Skip
var a = 50; //JS  ->  Do you know a? No  | What is the value ? - Context -  undefined
console.log(a); //Skip

//2. Execution Phase
console.log(a); //JS  ->  Do you know a? Yes  | What is the value ? - Context -  undefined
var a = 50; //JS  ->  Do you know a? Yes  | What is the value ? - Context - Note Down - a => 50
console.log(a); //JS  ->  Do you know a? Yes  | What is the value ? - Context - 50

//Example 1 with let
//1. Compilation Phase
console.log(a1); //skip
let a1 = 50; //JS  ->  Do you know a1? No  | What is the value ? - Context - dont initialize
console.log(a1); //skip

//2. Execution Phase
// console.log(a1); //JS  ->  Do you know a? Yes  | What is the value ? - Context -  Error
// let a1 = 50;
// console.log(a1);
