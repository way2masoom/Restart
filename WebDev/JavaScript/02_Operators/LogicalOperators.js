// Logical Operators are AND (&&) , OR (||) , NOT (!)

// Logical AND (&&)
const a = true;
const b = false;
console.log(a && b); // false

// Logical OR (||)
console.log(a || b); // true

// Logical NOT (!)
console.log(!a); // false

// Combining operators
const x = 5;
const y = 10;

console.log(x > 0 && y > 0); // true
console.log(x > 0 || y < 0); // true
console.log(!(x === y)); // true
console.log(x < 10 && y > 5); // true