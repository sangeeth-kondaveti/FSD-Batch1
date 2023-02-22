// Map
// => is used to iterate over the Array
// => It always return the same length of output array as input array
// => It is used to apply logics(add, sub, div, mul)

var a = [1, 9, 5, 8, 2, 6, 4, 12, 90, 45, 19, 13];
var b = a.map((data) => {
  return data * 2;
});
console.log(b);
//(12) [2, 18, 10, 16, 4, 12, 8, 24, 180, 90, 38, 26]

var a = [4, 8, 1, 9];
var b = a.map((abc) => {
  return `<p>${abc}</p>`;
});
console.log(b);

// ['<p>4</p>', '<p>8</p>', '<p>1</p>', '<p>9</p>']

//filter
// => It is used to filter out the values
// => It may or may not return the same length of output array as input array
// => Filter only return those data for which output or condition is true

var a = [1, 9, 5, 8, 2, 6, 4, 12, 90, 45, 19, 13];
var b = a.filter((data) => {
  return data > 30; //9 > 30
});
console.log(b);
//(2) [90, 45]

var a = [-1, 0, 1, 2];
var b = a.map((data) => {
  return data * 2;
});
console.log(b);
//[-2, 0,  2, 4]

var a = [-1, 0, 1, 2];
var b = a.filter((data) => {
  return data * 2;
});
console.log(b);
//(3) [-1, 1, 2]

//callback => When you call function inside an another function

a.map(() => {
  return;
});
