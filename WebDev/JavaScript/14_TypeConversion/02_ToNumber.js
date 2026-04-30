// ===============================
// ToNumber Examples
// ===============================

// String to number
console.log('Number("10") =', Number("10"));   // 10

// Boolean to number
console.log("Number(true) =", Number(true));   // 1
console.log("Number(false) =", Number(false)); // 0

// Null to number
console.log("Number(null) =", Number(null));   // 0

// Undefined to number
console.log("Number(undefined) =", Number(undefined)); // NaN

// Empty string
console.log('Number("") =', Number("")); // 0

// Invalid string
console.log('Number("abc") =', Number("abc")); // NaN

// Simple object
const obj = {};

console.log(Number(obj)); // NaN 