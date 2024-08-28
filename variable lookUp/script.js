//  variable lookup

let myName = "global";
function test() {
  // let myName = "Local"; // creating local variable
  console.log(myName);
}

// test(); // output --> local, because js look first local varible, if it is not found look for global variale.inace global variable also not throw an error

// commeting local variable
test(); // output --> global
