// ===============================
// ToBoolean Examples
// ===============================

// Case 1: Number
console.log("!3 =", !3);
// 3 → true → !true = false


// Case 2: Empty Object
let x = {};
console.log("!{} =", !x);
// {} → true → !true = false


// Case 3: Empty String
x = "";
console.log('!"" =', !x);
// "" → false → !false = true


// ===============================
// Using Boolean() directly
// ===============================

console.log("Boolean(0) =", Boolean(0));          // false
console.log("Boolean(1) =", Boolean(1));          // true
console.log('Boolean("") =', Boolean(""));        // false
console.log('Boolean("hello") =', Boolean("hello")); // true
console.log("Boolean(null) =", Boolean(null));    // false
console.log("Boolean([]) =", Boolean([]));        // true