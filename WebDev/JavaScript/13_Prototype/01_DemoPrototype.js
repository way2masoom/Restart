// Creating a simple object
const obj = { x: 10 };

// Calling built-in method (we didn't define this!)
console.log(obj.toString());


// Constructor
function Product(name) {
    this.name = name;
}

// Create object
const p = new Product("iPhone");

// displaying the product object
console.log(p);
console.log(p.toString()); // Js internal function call
