// try, catch and finally blocks -  handle exception => error

// console.log("Hello")

// consol.log("Hello") // syntax error

//runtime error  -> execute the program

// function hello() {}

// welcome();

// try {
//   //body of try
// } catch (error) {
//   //body of catch
// }

const numerator = 100;
const denominator = 2;
try {
  console.log(numerator / denominator);
} catch (error) {
  console.log("Error message: ", +error);
} finally {
  console.log("finally will execute every time");
}
