
// Object 1
const product1 = {
    name: "iphone",
    price: 100000
};

// Object 2
const product2 = {
    category: "mobile",
    brand: "apple"
};

// 1. Combine objects
const combined = { ...product1, ...product2 };

// 2. Clone object
const clone = { ...combined };

// 3. Update value
const updated = { ...combined, price: 120000 };

// 4. Destructuring with default
const { name, price, brand, stock = "Available" } = updated;

// Print all
console.log("Combined:", combined);
console.log("Clone:", clone);
console.log("Updated:", updated);
console.log("Destructured:", name, price, brand, stock);