// Object.freeze help us to achieve extreme level of immutability 
// This provides highest level of immutability.It creates a frozen object which means
// We cannot add new key value pairs
// We cannot remove existing key value pairs
// We cannot update existing key value pairs

const product = {
    name: "S24 Ultra",
    color: "Blue",
    price: 126830,
    company:"Samsung"
}

console.log("Displaying the Product \n", product);
Object.freeze(product);

console.log("Checking the Object is Frozen or not = ",Object.isFrozen(product));

// adding new keys pairs
product.warranty = "1 years";
console.log("Displaying the Product After adding new Keys Pairs \n ", product); // no update in the object

// deleting existing keys pairs
delete product.name;
console.log("Displaying after deleting Name \n", product); // name keys pairs still available 


// updating exiting keys pairs
product.name = "Iphone 13 pro";
console.log("Displaying after updating name \n",product);

console.log("Checking the Object is Sealed or not = ", Object.isSealed(product));
