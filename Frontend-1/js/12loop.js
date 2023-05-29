// for ✅
// while ✅
// do while  ✅
// for of  ✅
// for in (objects) ✅
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

//while

var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// 0
// 1
// 2
// 3
// 4

//do while
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// 0
// 1
// 2
// 3
// 4

//for of loop
var city = ["Delhi", "Mumbai", "helsinki", "London", "Amsterdam"];

for (mycity of city) {
  console.log(mycity);
}

// Delhi
// Mumbai
// helsinki
// London
// Amsterdam

var city = [
  "Delhi",
  "Mumbai",
  ["Red", "yellow", "Orange"],
  "London",
  "Amsterdam",
];

for (mycity of city) {
  if (Array.isArray(mycity)) {
    for (mycolor of mycity) {
      console.log(mycolor);
    }
  } else {
    console.log(mycity);
  }
}

// Delhi;
// Mumbai;
// Red;
// yellow;
// Orange;
// London;
// Amsterdam;
