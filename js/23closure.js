//nested function - func inside func
//scope - limit
//displayName - own scope
//greet - lexical scope

//outer function
// function greet(name) {
//   //inner function
//   function displayName() {
//     console.log(`Say hi ${name}`);
//   }
//   displayName(); //calling inner function
// }

// greet("John"); //calling outer function
//Say hi John

//outer function
function greet() {
  let name = "John";
  //inner function
  function displayName() {
    return `Say hi ${name}`;
  }
  return displayName(); //calling inner function
}

console.log(greet);
//console.log(g1); //return  function
// function displayName() {
//     return `Say hi ${name}`;
//   }
console.log(greet()); //return value
// Say hi John

//closure

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
var close = outer();
close();

// outer()()

function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = 20;
  return inner;
}
var close = outer("hello");
close();
//20 'hello'

function outest() {
  var c = 30;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
var close = outest()("hello");
close();
//10 'hello' 30
