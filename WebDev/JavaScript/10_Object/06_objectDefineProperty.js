// Object.defineProperty()


const product = {
    name: "iphone 16 pro",
    company: "apple",
    price: 125000,
}


console.log("Product before Define property", product);


// ✅ Make the 'name' property non-writable,
// so its value cannot be changed
Object.defineProperty(product, 'name', { writable: false });

// Trying to update name → ❌ will not work
product.name = "Iphone 17 pro";
console.log("Product After Changing the Name ", product);

// Updating price → ✅ works (still writable)
product.price = 240000
console.log("Updating the price", product.price);

// Make 'price' non-writable & non-configurable
Object.defineProperty(product,'price', {
    writable: false,
    configurable: false
});

// Trying to update name and price again
product.price = 19999999; // ❌ Won’t update
product.name = "nokia";   // ❌ Still won’t update

console.log("Final Attempt:", product);