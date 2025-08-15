// Check if the given sides can form a valid triangle
// We are given side lengths a, b, and c. The function checks if these sides can form 
// a valid triangle based on the Triangle Inequality Theorem.

// Function to find the Valid Triangle 
function validTriangle(a, b, c) {
    // Check if the sum of any two sides is greater than the third side
    if (a + b > c && a + c > b && b + c > a) {
        console.log("Yes it is Valid triangle");
    } else {
        console.log("No it's not a valid triangle");
    }
}

// Example usage
let a = 5, b = 6, c = 10;
validTriangle(a, b, c); // Output: Yes, it is a valid triangle.