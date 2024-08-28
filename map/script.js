// return a new arrray
// does not change the of original array

// Example 1
const num = [3, 2, 6, 7, 1];

const mult = num.map(function (item) {
  return item * 2;
});

console.log(mult);

// Example 2

const people = [
  { name: "vinay", age: 22, gender: "male" },
  { name: "prathap", age: 21, gender: "male" },
  { name: "sai", age: 22, gender: "male" },
  { name: "swathi", age: 20, gender: "fe-male" },
];

const result = people.map(function (item) {
  return item.name.toUpperCase();
});
console.log(result);
