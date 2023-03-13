//this  - to access a property of object from within a method of the same object

// let firstname = "Murali";
// let lastname = "Shankar";

// let SayHi = {
//   firstname: "Lokeshwari",
//   lastname: "Dhanapal",
//   greet: function () {
//     return `Say hi to ${firstname} ${lastname}`;
//   },
// };

// console.log(SayHi.greet()) //Say hi to Murali Shankar

//using this
let firstname = "Murali";
let lastname = "Shankar";

let SayHi = {
  firstname: "Lokeshwari",
  lastname: "Dhanapal",
  greet: function () {
    return `Say hi to ${this.firstname} ${this.lastname}`;
  },
};

console.log(SayHi.greet()); //Say hi to Lokeshwari Dhanapal
