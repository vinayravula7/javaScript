// reduce to single value --> number, array, object
// 1 parameter (acc) accumalator --> total of calculatin
// 2 parameter (curr) current value --> current value
// Example 1
const num = [3, 2, 6, 7, 1];

const res = num.reduce(function (acc, curr) {
  // console.log(acc);
  // console.log(curr);
  acc += curr;
  return acc;
}, 0);
console.log(`The sum of the array is : ${res}`);

// Example 2
const people = [
  { name: "vinay", age: 22, gender: "male", id: 1, salary: 30000 },
  { name: "prathap", age: 21, gender: "male", id: 2, salary: 5000 },
  { name: "sai", age: 22, gender: "male", id: 3, salary: 4000 },
  { name: "swathi", age: 20, gender: "fe-male", id: 4, salary: 2000 },
  { name: "bulu", age: 20, gender: "fe-male", id: 5, salary: 8000 },
];

const salarySum = people.reduce(function (acc, curr) {
  acc += curr.salary;
  return acc;
}, 0);
console.log(salarySum);
