console.log("Hi")
console.log(4 + 5)

//Different ways to declare JS
// var, let, const 

var x = 5;
console.log(x)
console.log(typeof x)

// Data type - number = 0-9, string - "", no float, boolean - true/false, null, 

var b = [ 3, 5, 6];

console.log(typeof b)

//Array - []
//object = {}
//Array of objects = [{},{},{}]

//implicit coercion
var x1 = 3;
var x2 = "5";

console.log(x1 + x2);
console.log(x1 - x2);
   //        ( +3) - (-5 )= -2
//1. ans + Reason
//2. ans +  Reason

// x1 + x2
// typeCasting , coercion
// 3 -> "3"
// "5"
// "3" + "5" -> "35"

console.log(typeof null) // object
console.log(typeof NaN) // number

var t3 = "abc" - "3";
//How to check for NaN?
console.log(isNaN('123'))
console.log(isNaN('abc'))
//check print true if t3 is NaN
console.log(isNaN(t3))
console.log(t3); // Nan
console.log(typeof t3) // Number


//NaN - not a number
//1. ans + Reason - NaN
//2. ans +  Reason - number

//Type casting
//1. explicit coercion
var z1 = 3;
var z2 = "5";

console.log(z1 + +(z2));
console.log(z1 + parseInt(z2));
console.log(z1 - z2);



//2. implicit coercion
var x1 = 3;
var x2 = "5";

console.log(x1 + x2);
console.log(x1 - x2);
   //        ( +3) - (-5 )= -2
//1. ans + Reason
//2. ans +  Reason

// x1 + x2
// typeCasting , coercion
// 3 -> "3"
// "5"
// "3" + "5" -> "35"