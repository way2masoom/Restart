// Recursion function to print the factorial of Number
// Using array.map and name & anonymous function


// Name function
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

const arr=[1,2,3,4,5]
console.log(arr.map(factorial));