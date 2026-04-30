// Function to check sign without using built-in methods
function checkSign(value) {

    // Check if value is zero (0 or -0)
    if (value === 0) {

        // Divide 1 by value to detect sign
        if (1 / value === -Infinity) {
            return "Negative Zero (-0)";
        } else {
            return "Positive Zero (+0)";
        }
    }

    // Check positive number
    if (value > 0) {
        return "Positive Number";
    }

    // Check negative number
    if (value < 0) {
        return "Negative Number";
    }

    return "Not a number";
}


// Testing
console.log(checkSign(0));
console.log(checkSign(-0));
console.log(checkSign(10));
console.log(checkSign(-5));