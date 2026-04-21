// Program to combine two objects together

// Creating first object
const obj1 = {
    name: "iphone",
    price: 100000
};

// Creating Object 2
const obj2 = {
    category: "mobile",
    brand: "apple"
};

// Combine both objects using spread operator
const combined = { ...obj1, ...obj2 };
// Displaying result
console.log("Combined Object:", combined);
