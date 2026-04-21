// creating an object
const product = {
    name: "iphone 19 pro",
    price: 19764,
    category: "phones",
    description: "best camera phone"
};

// Destructuring: extracting values into variables
const { name, price, category, description } = product;
console.log("Name :", name, "Price :", price, "Category :", category, "Description :", description);

// Creating another object
const product2 = {
    name: "iphone",
    price: 100000
};

// Renaming variables while destructuring
const { name: productName, price: productPrice } = product2;

console.log(productName, productPrice); 