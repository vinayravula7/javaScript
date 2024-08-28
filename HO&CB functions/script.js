// Higher-Order and Call-Back functions

// creating higherOrder funtion
function higherOrder(cb) {
  // providing a parameter as function
  console.log("This is higher-Order function");
  cb(); // callBack function calling
}

// creating a call back function
function callBack() {
  console.log("This is call-Back function");
}

// providing call back function as parameter to higherorder function
higherOrder(callBack);

//    ANOTHER EXAMPLE

// function morning() {
//   return `good morning`;
// }

// function greet(firstName, cb) {
//   console.log(`Hello ${firstName} ${cb()}`);
// }
// greet("vinay", morning);
