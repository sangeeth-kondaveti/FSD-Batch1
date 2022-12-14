// for
// while
// do while
// for of
// for in (objects)
// it helps to iterate over the array as well as to print some series

// for(variable, condition, operation) {

// }

for (i = 0; i < 5; i++) {
  console.log(i);
}

var city = ["Delhi", "Mumbai", "helsinki", "London", "Amsterdam"];
//             0       1          2           3         4
for (var i = 0; i < city.length; i++) {
  console.log(city[i]);
}

var city = ["Delhi", "Mumbai", "helsinki", "London", "Amsterdam"];

for (var i = 0; i < city.length; i++) {
  console.log(`<p>${city[i]}</p>`);
}

var city = [
  "Delhi",
  "Mumbai",
  ["Red", "yellow", "Orange"],
  "London",
  "Amsterdam",
];

for (var i = 0; i < city.length; i++) {
  if (Array.isArray(city[i])) {
    for (var j = 0; j < city[i]; j++) {
      console.log(city[i][j]);
    }
  } else {
    console.log(city[i]);
  }
}
