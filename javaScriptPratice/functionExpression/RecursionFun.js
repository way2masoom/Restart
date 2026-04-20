// Recursion Function example

const arr = [1, 2, 3, 4, 5];

const result = arr.map(function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
});

console.log(result);

// name function
const arr2 = [2, 3, 4, 6];
function myFactorial(n) {
    if (n == 1) return 1;
    return n * myFactorial(n - 1);
}

// calling the name function with arr.map
const result2 = arr2.map(myFactorial);
console.log("Named function = ", result2);

console.log();

// Recursion call with anonymous function
console.log("Anonymous Function");

const arr3 = [2, 4, 8, 6];
const fact = arr2.map(function (n) {
    if (n == 1) return 1;
    return n * arguments.callee(n - 1);
})

console.log("facotorial of Array =", fact);