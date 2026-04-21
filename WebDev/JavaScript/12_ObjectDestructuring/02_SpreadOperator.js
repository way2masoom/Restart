// Spread Operator in Object and classes

// Creating an object
const product = {
    name: "ipad",
    price: 36000,
    category: "electronic",
    description: "Ipad a16 2025 "
};

// Destructuring with normal Alias
const { name: ProductName, price: ProductPrice, category, description } = product;
console.log("Product with Alias : ", ProductName, ProductPrice, category, description);
console.log();

// Creating  object using spread operator
const purchaseProduct = {
    OrderId: "176xe3",
    OrderDate: "04/22/2026",
    ...product // spreading all properties of product
}
console.log("Product with Spread Operator : ", purchaseProduct);


// Override existing property
const updatedProduct = {
    ...product,
    price: 40000 // overrides old price
}
console.log("Product after updating the price : ", updatedProduct);