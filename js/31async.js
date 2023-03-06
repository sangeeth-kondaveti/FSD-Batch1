//async - asynchronous;

//async function
//async function name(params1, params2, ...paramsN) {}

async function name() {
  console.log("Async function");
  return Promise.resolve();
}

name();
//Async function

//adding .then()

// async function name() {
//   console.log("Async function");
//   return Promise.resolve("hello");
// }

// name().then(function (result) {
//   console.log(result);
// });
// // Async function
// hello

//await - used inside async function to wait for the asynchronous operation

// let result = await promise;

//create promise

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

//async function

async function asyncFunc() {
  //wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("hello");
}
asyncFunc();
// Promise resolved
// hello
