/**
 * Function to compute the Greatest Common Divisor (GCD) of two numbers
 * using a simple brute-force approach.
 */

function gcd(a, b) {
    // Initialize answer with 1 (smallest possible GCD)
    let ans = 1;

    // Loop through numbers from 2 up to the smaller of a and b
    for (let i = 2; i <= Math.min(a, b); i++) {
        // If 'i' divides both numbers, update ans
        if (a % i === 0 && b % i === 0) {
            ans = i;
        }
    }

    // Return the greatest common divisor found
    return ans;
}

// Example usage:
const num1 = 48;
const num2 = 18;

// Print result in a formatted string
console.log(`GCD of ${num1} and ${num2} is ${gcd(num1, num2)}`);
