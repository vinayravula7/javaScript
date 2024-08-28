const element = document.getElementById("root");

// click
// element.addEventListener("click", function hello() {
//   alert("submitted successfully");
// });

// double clicked
// element.addEventListener("dblclick", function hello() {
//   alert("submitted successfully");
// });

// mouseover
// element.addEventListener("mouseover", function hello() {
//   alert("submitted successfully");
// });

// mouseout
// element.addEventListener("mouseout", function hello() {
//   alert("submitted successfully");
// });

//keydown
// element.addEventListener("keydown", function hello() {
//   alert("submitted successfully");
// });

//
element.addEventListener("submit", function hello(event) {
  event.preventDefault();
  alert("form submitted");
});
