const list = document.querySelector("ul");
console.log(list);
// getting
console.log(list.attributes);

console.log(list.getAttribute("class"));
console.log(list.getAttribute("id"));
console.log(list.dataset.vinay);

// setting
const h1 = document.querySelector("h1");
// console.log(h1);
h1.setAttribute("id", "headings");
console.log(h1.getAttribute("id"));
h1.setAttribute("class", "new-heading");
console.log(h1.getAttribute("class"));
