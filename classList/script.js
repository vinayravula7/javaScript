const h1 = document.querySelector("h1");
console.log(h1);
// classList property
// console.log(h1.classList);

h1.classList.add("new-class");
console.log(h1.classList);

h1.classList.remove("nav");
console.log(h1.classList);

console.log(h1.classList.contains("navbar")); // true

// it deletes if it contains other wise added
h1.classList.toggle("new-one");
console.log(h1.classList);
