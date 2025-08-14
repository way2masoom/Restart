// Crating arrays in JS

let arr=[]; // Empty array
let arr1=[1,2,3]; // Array with elements

let arr2=[1,2,3,"Hello",true,null,-10,20,"alam"]; // Array with different types of elements
console.log(arr2); // Print the array with different types of elements

console.log(typeof arr2); // check the type of arr2
console.log(Array.isArray(arr2)); //check if arr2 is an array
console.log(arr2.length); // Length of the array

console.log(arr[2]); // access element at index 2

// updating the array Element 
arr2[0]=-10;
console.log(arr2)

let arr3=new Array(10); // Create an array of length 10
console.log(arr3);

let arr4= new Array(5).fill(-3);
console.log(arr4);
