/*
 * Function to compute the Least Common Multiple (LCM)
 * using a simple brute-force approach
 */

function lcm(a, b) {

    // Loop from the larger number(b) up to product (a*b)
    for (let i=Math.max(a,b); i <= a * b; i++) {
        if (i % a == 0 && i % b == 0) {
            return i; // Return immediately when LCM is found
        }
    }
}


// Example usage:
const num1 = 4;
const num2 = 6;

console.log(`LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`); // Output: 12