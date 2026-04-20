// Object.defineProperty

const product = {
    name: "S24 Ultra",
    color: "Blue",
    price: 126830,
    company: "Samsung"
}

console.log("Product before DefineProperty \n",product);

Object.defineProperty(product, 'name', { writable: false });

//trying to update the name
product.name = "abcd";
console.log("Object after updating the name \n",product);

// we can't delete or update company key value pair after using configurable
Object.defineProperty(product, 'company', {
    writable: false, configurable: true
})

delete product.company;
console.log("Deleting the company \n", product);

product.company = "apple";
console.log("Updating the company \n", product);


