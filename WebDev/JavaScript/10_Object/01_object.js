// Object are the collection of key and value in the JS

const product={
    name:"Iphone 16 pro max",
    company:"Apple",
    price:160000,
    color:"Black"
};

//If we need fetch all the unique keys of our object say product
const keyValues=Object.keys(product);
console.log(keyValues);

// If we need to fetch all the available Value of product
const productValue=Object.values(product);
console.log(productValue);

// If we need to fetch all the key and value together 
const entries=Object.entries(product);
console.log(entries);

 
