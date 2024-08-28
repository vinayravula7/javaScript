//  Global scope

let myName = "global"; // global variable

function test() {
  //   myName = "im global"; // also do that
  console.log(myName); // accessing global variable
}

test();

console.log(myName); // accessing outside funtion
