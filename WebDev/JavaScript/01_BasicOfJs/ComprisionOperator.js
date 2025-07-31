// Comprision Operators in JavaScript

console.log(10>5); // true
console.log(8>=8); // true
console.log(10<5); // false
console.log("10" == 10); // true, Abstract Equality operator(type coercion)
console.log("10" === 10); // false, strict equality (no type coercion)

// abstract not equal   
console.log("10" != 10); // false, Abstract Inequality operator(type coercion)
// strict not equal
console.log("10" !== 10); // true, strict inequality (no type coercion)
console.log(10!==10);
console.log("10"!== "10"); // false, strict inequality (no type coercion)




// 1. Equality Operators
console.log(5 == '5'); // true, loose equality (type coercion)
console.log(5 === '5'); // false, strict equality (no type coercion)
console.log(5 != '5'); // false, loose inequality (type coercion)
console.log(5 !== '5'); // true, strict inequality (no type coercion)   

// 2. Comparison Operators
console.log(10 > 5); // true
console.log(10 < 5); // false           
console.log(10 >= 10); // true
console.log(10 <= 5); // false

// 3. Logical Operators
// Example of logical short-circuiting
let num1 = 10;          
let num2 = 20;
console.log(num1 && num2); // Output: 20 (num1 is truthy, so it returns num2)
console.log(num1 || num2); // Output: 10 (num1 is truthy, so it returns num1)
console.log(!num1); // Output: false (num1 is truthy, so it returns false)
console.log(10 && ""); // Output: "" (10 is truthy, so it returns the second operand, which is an empty string)
console.log("" && -0); // Output: "" (the first operand is falsy, so it returns the first operand)

