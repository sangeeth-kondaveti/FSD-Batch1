var a = 10;
var b = 20;
a + b;
30;

//  keyword nameoffunction(parameters){
//         return output
//  }

function add(a, b) {
  return a + b;
}

add(10, 30); //40
console.log(add(10, 30));
console.log(add(100, 100));

//ES5
function isEven(userInput) {
  let output;
  if (userInput % 2 == 0) {
    output = `Number ${userInput} is even`;
  } else {
    output = `Number ${userInput} is odd`;
  }
  return output;
}

console.log(isEven(10));
console.log(isEven(17));

//ES6 - arrow function
let add1 = (a, b) => {
  return a + b;
};
console.log(add1(5, 6));

function greet() {
  console.log("Hello");
}
greet(); //function call
