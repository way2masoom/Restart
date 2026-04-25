// Rest Operator
// Rest Operator syntax allows a function to accept an indefinite number of arguments as an array,

function sumOfNumber(...theArg) {
    let total = 0; // default value
    for (const arg of theArg) {
        total += arg;
    }
    return total;
}

// calling the function sumOfNumber
const sum = sumOfNumber(1, 2, 3, 4, 5);
console.log(sum);

// Rest Operator in the product 

// Creating an object
const product = {
    name: "ipad",
    price: 36000,
    category: "electronic",
    description: "Ipad a16 2025 "
};
// Extract 'name' and collect remaining properties
const { name, ...nameOfProduct } = product;

// Print extracted value
console.log("Name:", name);

// Print rest object
console.log("Rest Object:", nameOfProduct);

// Original object remains same
console.log("Original:", product);
