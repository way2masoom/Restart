// Object.preventExtension
// This method helps us to achieve 50 % of what seal gives us.
// We cannot add new key value pairs
// We can remove existing key value pairs.
// Update is allowed.

const product = {
    name: "S26 Ultra",
    color: "Blue",
    price: 126830,
    company: "Samsung"
}

Object.preventExtensions(product);
console.log("Object \n", product);

product.discount = "20 %"
console.log("Object After updating new keys value pairs \n", product); //false

// deleting the color
delete product.color
console.log("Object After Removing existing keys value pairs \n", product); // true

// updating Existing values
product.name = "Samsung S26 Ultra"
console.log("Object After Updating existing keys value pairs \n", product); // true


