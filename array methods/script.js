let arr = [2, 5, 2, 6, 7, 9];

// properties
console.log(arr.length); //6

// methods
arr.push(11); // add 11 end of the array
// console.log(arr);

arr.pop(); // delete last element in the array
console.log(arr);

console.log(arr.reverse()); // reverse an array

arr.unshift(10); // add 11 begining of the array
console.log(arr);

arr.shift(); // delete first element in the array
console.log(arr);

let arr2 = [55, 33, 556, 123, 555];
console.log(arr.concat(arr2)); // add two arrays
