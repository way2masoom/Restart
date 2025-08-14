// arrays with function 

let arr=[1,2,3,4,5,6,];

console.log(arr.length); //Length is not a function it's a property/key
console.log(Array.isArray(arr)); // Check if arr is an array
console.log(arr[2]); // Access element at index 2

arr.push(7); // Add element at the end of the array
console.log(arr); // Print the updated array

arr.pop(); // Remove the last element of the array
console.log(arr); // Print the array after popping the last element

arr.shift(); // Remove the first element of the array
console.log(arr); // Print the array after shifting

arr.unshift(0); // Add element at the beginning of the array
console.log(arr); // Print the array after unshifting

arr.reverse(); // Reverse the array
console.log(arr); // Print the reversed array

arr.sort(); // Sort the array
console.log(arr); // Print the sorted array

