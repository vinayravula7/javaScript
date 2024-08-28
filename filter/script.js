// return a new arrray
// can manipulate the size of the array
// return based on conditon
//  perform ture or false operations like if
// <, >, <=, >=, ==, ===, num%2==0
// Example 1
const num = [3, 2, 6, 7, 1];

const res = num.map(function (item) {
  return item % 2 == 0;
});

console.log(res);

// Example 2

const people = [
  { name: "vinay", age: 22, gender: "male" },
  { name: "prathap", age: 21, gender: "male" },
  { name: "sai", age: 22, gender: "male" },
  { name: "swathi", age: 20, gender: "fe-male" },
  { name: "bulu", age: 20, gender: "fe-male" },
];

const females = people.filter(function (person) {
  return person.gender === "fe-male";
});
console.log(females);
const males = people.filter(function (person) {
  return person.gender === "male";
});
console.log(males);
