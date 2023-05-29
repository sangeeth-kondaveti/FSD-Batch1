//object = {k: v} pairs

const {
  name,
  networth,
  power = "💿",
  skill = ["genius", "billionaire", "playboy", "philanthropist"],
} = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "He loves everyone",
};

console.log(networth, power, skill);

const avg = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "He loves everyone",
};

const avg1 = { ...avg, nation: "US", power: "💿" };
console.log("Avg=", avg);
console.log("Avg1=", avg1);

const avg2 = { nation: "US", power: "💿", ...avg };
console.log("Avg=", avg);
console.log("Avg2=", avg2);
// {
//     name: "Tony Stark",
//     house: "🏠",
//     networth: "💰💰💰💰",
//     phrase: "He loves everyone",
//     nation: "US",
//     power: "💿"
//   };

// {
//     nation: "US",

//     name: "Tony Stark",
//   house: "🏠",
//   networth: "💰💰💰💰",
//   power: "🤖",
//   phrase: "He loves everyone",
// }

// object shorthand - key and value name should be same

const age = 20;
const batch = "FSD-1";
const mark = 90;

const student = {
  name: "Jack",
  age,
  batch,
  score: mark,
};

console.log(student);

//Jack has got 90 and he belongs to FSD_1
function printDetails(student) {
  return (
    student.name +
    " has got " +
    student.score +
    " and he belongs to " +
    student.batch
  );
}
console.log(printDetails(student));

function printDetails1(student) {
  const { name, score, batch } = student;
  return name + " has got " + score + " and he belongs to " + batch;
}
console.log(printDetails1(student));

//destructuring in argument itself
function printDetails2({ name, score, batch }) {
  //const  {name, score,batch }= student
  return name + " has got " + score + " and he belongs to " + batch;
}
console.log(printDetails2(student));

//Template literals - `` ${} - interpolation - substituting a value

function printDetails3({ name, score, batch }) {
  return `${name} has got ${score} and he belongs to ${batch}`;
}
console.log(printDetails3(student));

//Arrow function + Template literals  + destructuring

const printDetails4 = ({ name, score, batch }) =>
  `${name} has got ${score} and he belongs to ${batch}`;

console.log(printDetails4(student));
