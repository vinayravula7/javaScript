// return a single instace
// return first match, if not match undefined
// usefull for finding unique value
// Example 1
const num = [3, 2, 6, 7, 1];

const res = num.find(function (item) {
  return item === 6;
});

console.log(res);

// Example 2

const people = [
  { name: "vinay", age: 22, gender: "male", id: 1 },
  { name: "prathap", age: 21, gender: "male", id: 2 },
  { name: "sai", age: 22, gender: "male", id: 3 },
  { name: "swathi", age: 20, gender: "fe-male", id: 4 },
  { name: "bulu", age: 20, gender: "fe-male", id: 5 },
];

const result = people.find(function (person) {
  return person.id === 3;
});
console.log(result);
