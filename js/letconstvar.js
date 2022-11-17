// var -> we can redeclare and reassign
// let -> we cannot redeclare but can reassign
//const -> we cannot redeclare nor reassign

var a  = 10

// var a --> declaration
// a = 10 --> assignment

var a = 10
a // 10


console.log(a) //12
var a  = 11
var a = 12

let b = 20
console.log(b)
// let b = 21 // Uncaught SyntaxError: Identifier 'b' has already been declared 
//  console.log(b)

 const c = 10
 console.log(c)
//   c = 30 //Uncaught SyntaxError: Identifier 'c' has already been declared




