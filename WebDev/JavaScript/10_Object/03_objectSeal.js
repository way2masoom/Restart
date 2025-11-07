// Object.seal help the object to Archive the immutability  

// This method will help us to make sure that we are not able 
// to add new key value pairs, or delete an existing key value pair.
// But it will allow update of existing key value pairs

const product = {name: "Iphone 14 prp", price: 125000}
Object.seal(product);

product.company="apple";
console.log(product); // new addition not allowed

product.name="Iphone 16 pro"
console.log(product); // Update the existing key value pairs

delete product.price
console.log(product); // deletion of key-value pair not allowed


// Check the object is freeze or sell
console.log("Frozen =",Object.isFrozen(product)); // False
console.log("Sealed =",Object.isSealed(product)); // True
