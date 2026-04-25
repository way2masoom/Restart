// __proto__ is a hidden link inside every object

// Create object
const obj = { x: 10 };

// Access prototype using __proto__
console.log(obj.__proto__);

// Constructor function
function Product(name) {
    this.name = name;
}

// Create object
const p = new Product("iPhone");

// Check prototype link
console.log(p.__proto__ === Product.prototype);