let product = {
    name: "iphone 14 pro",
    company: "Apple",
    price: 125000,
    warranty:"1 years",
    color: "Black"
};

console.log(product);
console.log(Object.keys(product)); // fetch all the Unique key 
console.log(Object.values(product)); // fetch all the Values
console.log();

console.log(Object.entries(product)); // fetch all the keys and values  
console.log("Length of Object : ",Object.keys(product).length); // fetch the length of object
