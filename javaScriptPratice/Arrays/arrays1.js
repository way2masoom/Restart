// examples of arrays

let arr1 = []; // empty array
let arr2 = ["alam", 1, 2, null, 3, -9.11, 5.5, true];

console.log(arr1);
console.log(arr2);

console.log(typeof (arr1)); // array is an object

console.log(arr2[3]) // 3th  index of array2 = null
console.log(arr2.length); // length of the array; 

// we can also update the value of array
console.log(arr2);
arr2[3] = 100;
console.log(arr2);

// index not available in the array
arr2[12] = "hello js";
console.log(arr2);


