import { printDetails4 as provideInfo, double, msg } from "./util.js"; //import-named
// import printDetails4 from "./util.js"; //import-default
// import msg from "./util.js"; //import--default
const student = {
  name: "Jack",
  age: 20,
  batch: "FSD-1",
  score: 90,
};

console.log(provideInfo(student));

console.log(double(10));
console.log(msg);
