//spread operator => expand / spread of an array

const a1 = ["My", "name", "is", "Sangeetha"];

console.log(a1);
console.log(...a1);

console.log("My", "name", "is", "Sangeetha");

//copy the items into a single array

const arr1 = ["one", "two"];
const arr2 = ["three", "four", ...arr1]; // ['three', 'four', 'one', 'two']

console.log(arr2);
console.log(...arr2);

//["one", "two", "three", "four"]

//rest operator

let z = function (...arr1) {
  console.log(arr1);
};

z(3); //[3]
z(4, 5, 6); //[4,5,6]

function sum(x, y, z) {
  console.log(x + y + z);
}
const n1 = [1, 2, 5, 4];

sum(...n1);//8
