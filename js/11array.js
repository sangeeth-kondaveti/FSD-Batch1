// Array is collection of homogenious and heterogenious data types
// ````````  -backtick / template literals

//homogenious
//----------------
// let a  = ["Hiii", "Hello", "Yes", "test", 'code', `Hey`] => Array of Strings
// let b = [3,5,67,83,90,11] => Array of numbers
// let c = [true, false, true, true] => Array of Boolean

//heterogenious
//----------------

let d = ["Hii", 56, true, 345, false, "hey", "text"];
//{} = object
//[{obj1}, {obj2}, {obj3}] =Array of objects
//[] = array
var a = [4, 6, 7, 8];
console.log(typeof a); //object

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];
//   index-   0        1          2          3         4
console.log(city[1]);
console.log(city[4]);
console.log(city[5]);

//push - add value in the end of array
console.log(city.push("Boston"));
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam","Boston"] // 6
console.log(city.push("Venice"));
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam","Boston", "Venice"] //7

//pop = remove/delete last value always
console.log(city.pop()); //"Venice"
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam","Boston"] // 6
console.log(city.pop()); //"Boston"
console.log(city.pop()); //"Amsterdam"

//unshift - add as first value in array
var a = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
var b = a.unshift("Dubai");
console.log(b);
//["Dubai", "Delhi", "Mumbai", "Helsinki", "London", "Amsterdam","Boston", "Venice"]

//shift - remove first value always

console.log(a.shift());
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam","Boston", "Venice"]

console.log(a.shift());
//[ "Mumbai", "Helsinki", "London", "Amsterdam","Boston", "Venice"]

//last
//push - add value in the end of array
//pop = remove/delete last value always
//First
//unshift - add as first value in array
//shift - remove first value always

//slice

var a = [
  "Dubai",
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
console.log(a.slice(1));
//["Dubai", "Delhi", "Mumbai", "Helsinki", "London", "Amsterdam","Boston", "Venice"]
//     0       1         2        3             4          5          6        7
//    -7       -6       -5       -4             -3        -2          -1         0
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam","Boston", "Venice"]
console.log(a.slice(2));
//["Mumbai", "Helsinki", "London", "Amsterdam","Boston", "Venice"]
console.log(a.slice(2, 5));
//["Mumbai", "Helsinki", "London"]
console.log(a.slice(0, -2));
//["Dubai", "Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]

//splice => a.splice(startIndex, deleteCount, values)

var a = [
  "Dubai",
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
//           0       1         2        3             4          5          6        7
//remove 2 value from index 2
console.log(a.splice(2, 2));
//["Dubai", "Delhi", "London", "Amsterdam","Boston", "Venice"]

var a = ["Dubai", "Delhi", "London", "Amsterdam", "Boston", "Venice"];
console.log(a.splice(3, 0, "Pune", "Nice"));
//["Dubai", "Delhi", "London", "Amsterdam","Boston", "Venice"]
//["Dubai", "Delhi", "London", "Pune","Nice", "Amsterdam","Boston", "Venice"]

console.log(a.splice(1, 1, "Innsburg", "Paris"));
//["Dubai", "Innsburg", "Paris", "London", "Pune","Nice", "Amsterdam","Boston", "Venice"]

var a = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
//          0       1         2            3             4          5          6        7
console.log(a.indexOf("London")); //3
console.log(a.indexOf("Delhi")); // 0
console.log(a.indexOf("Pune")); // -1

var c = ["a", "b", "c", 1];
var b = [2, "d", "e", "f"];
c + b;
//["a", "b", "c", 1] + [2, "d", "e", "f"]
//["a", "b", "c", 12,  "d", "e", "f"]

c.concat(b);
//["a", "b", "c", 1, 2,  "d", "e", "f"]

b.concat(c);
//[2,  "d", "e", "f","a", "b", "c", 1 ]

var name = "Hello";
var b = [1, 2, 3];
console.log(Array.isArray(name)); //false
console.log(Array.isArray(b)); //true

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];

var city = [
  "Delhi", // 0
  "Mumbai", //1
  "Helsinki", //2
  ["Red", [1, 2, 3], "Yellow", "Orange"], //3
  "London", //4
  "Amsterdam", //5
];
console.log(city[0]); //'Delhi'   [0  1  2]
console.log(city[3]); // ["Red", [1, 2, 3], "Yellow", "Orange"],
//                          0        1         2          3
// ['Red', Array(3), 'Yellow', 'Orange']

console.log(city[3][0]); //'red'
console.log(city[3][1][2]); //3
console.log(city[3][1][0]); //1
