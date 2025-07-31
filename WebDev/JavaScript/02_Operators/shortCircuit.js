// Example of logical short-circuiting
let num1=10;
let num2=20;
console.log(num1&&num2) // Output: 20 (num1 is truthy, so it returns num2)

console.log(num1||num2) // Output: 10 (num1 is truthy, so it returns num1)

console.log(!num1) // Output: false (num1 is truthy, so it returns false)

console.log(10 && "") // Output: "" (10 is truthy, so it returns the second operand, which is an empty string);
console.log("" && -0) // Output: "" (the first operand is falsy, so it returns the first operand)
console.log(40 && null); // Output: null (the second operand is null, so it returns null)

// logical OR (||)
console.log(100 || null); 
console.log(0||-0);
console.log(null || "Hello"); // Output: "Hello" (the first operand is falsy, so it returns the second operand)



// Short-circuiting with logical AND (&&)
console.log(num1 > 5 && num2 < 30); // Output: true (both conditions are true)
console.log(num1 < 5 && num2 < 30); // Output: false (first condition is false, so it short-circuits)
console.log(num1 > 5 && num2 > 30); // Output: false (second condition is false, so it short-circuits)