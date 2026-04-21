// creating an object
const obj1 = {
    name: "iphone 19 pro",
    price: 19764,
    category: "phones",
    description: "best camera phone"
};

// Destructuring: extracting values into variables
const { name, price, category, description } = obj1;
console.log("Name :", name, "Price :", price, "Category :", category, "Description :", description);

// Creating another object
const obj2 = {
    name: "iphone",
    price: 100000
};

// Renaming variables while destructuring
const { name: productName, price: productPrice } = obj2;

console.log("Name: ", productName, "Price : ", productPrice);