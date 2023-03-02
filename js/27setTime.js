// function greet() {
//   console.log("Hello");
// }

// setTimeout(greet, 3000);
// console.log("This message is shown first");

function showTime() {
  // new date and time
  let dateTime = new Date();

  //current local time
  let time = dateTime.toLocaleTimeString();
  console.log(time);

  //display time after 5 seconds
  setTimeout(showTime, 5000);
}

showTime();
