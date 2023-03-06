//promise - handle asynchronous operation is successfully completed or not

// states
// --------
// 1. Pending
// 2. Fulfilled
// 3. rejected

// promise Object
// -------------

let promise = new Promise(function (resolve, reject) {
  //write something
});

//Promise() - constructor - it takes fun as an argument

const count = true;
let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value");
  } else {
    reject("There is no count value");
  }
});

console.log(countValue);
//Promise {<fulfilled>: 'There is a count value'}

// .then() - used with callback when promise is successfully fulfiled and resolved
// .then(() =>{})
// .then(), .catch(), .finally() -methods

let countValue1 = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

countValue1
  .then(function successvalue(result) {
    console.log(result);
  })
  .then(function successvalue() {
    console.log("You can call multiple func this way");
  });
//Promise resolved
//You can call multiple func this way

api()
  .then(function (result) {
    return api2();
  })
  .then(function (result2) {
    return api3();
  })
  .then(function (result3) {
    return api4();
  })
  .catch(function (error) {
    console.log(error);
  });

  //-----------------------------------------------
// callback Hell
// ------------
api(function(result){
  api2(function(result2){
    api3(function(result3){
      if(result){
        console.log(result)
      }else{
        console.log(error)
      }
    })
  })
})