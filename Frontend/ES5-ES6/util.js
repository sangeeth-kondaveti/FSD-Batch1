const age = 20;
const batch = "FSD-1";
const mark = 90;

const student = {
  name: "Jack",
  age,
  batch,
  score: mark,
};

const printDetails4 = ({ name, score, batch }) =>
  `${name} has got ${score} and he belongs to ${batch}`;

//console.log(printDetails4(student));

const double = (n) => n * 2;

const msg = "Hello Everyone";
// 1. named import & export  - preferred
// 2. default import & export
export { printDetails4, double, msg }; //export- named

//export default printDetails4;

// export default msg;
