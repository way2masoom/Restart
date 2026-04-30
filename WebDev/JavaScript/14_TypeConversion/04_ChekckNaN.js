// Function to check if value is NaN or not
// NaN is not equal to anything (even itself)

console.log(NaN === NaN); // faslse

function checkNaN(value) {
    if (Number.isNaN(value)) { // we used isNaN for it
        return "Yes";
    } else {
        return "No";
    }
}

console.log(checkNaN(NaN));