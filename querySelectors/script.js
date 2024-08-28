//querySelector
const one = document.querySelector(".one");
console.log(one);
const two = document.querySelector("#heading");
console.log(two);
// if multiple classes contains same class name it will give first tag
const three = document.querySelector(".content");
console.log(three);

// it will give node list
const four = document.querySelectorAll(".content");
console.log(four);
