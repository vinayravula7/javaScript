

let myName = " Vinay Ravula";

// properties 
console.log(myName.length); // 13

// methods
console.log(myName.charAt(3)); // n
console.log(myName.indexOf("a")); //4
console.log(myName.lastIndexOf("a")); //12
console.log(myName.toLocaleLowerCase()); // vinay ravula
console.log(myName.toUpperCase()); // VINAY RAVULA
console.log(myName.trim()); // remove spaces both ends
console.log(myName.slice(3,6)); //nay
console.log(myName.slice(-4)); // vula

let str1 = "ravula";
let str2 = "vinay";
console.log(str1.concat(str2)); // ravulavinay



// interpolation with backtick
console.log(`My full name is ${str1} ${str2}`); // best practice