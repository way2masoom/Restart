// Original object with nested object
const product = {
    name: "iphone",
    price: 100000,
    details: {
        color: "black",
        warranty: "1 year"
    }
};

// Destructuring the product
const newProduct = { ...product };
// console.log("Destructured product :", newProduct);

// Accessing the nested object
const { details: { color } } = product;
console.log("Accessing the  color : ", color);
console.log();



// Print both objects
console.log("Original Product : ", product);

newProduct.details.color = "white";
console.log("Updated Product :", newProduct);


// creating another product with nested object
const product2 = {
    name: "MACbook M4",
    price: 199990,
    category: {
        name: "laptop",
        categoryId: 12,
        type: {
            typeId: 11,
            typeName: "electronic"
        }
    }
};

// Destructuring the product 2 for typeID
/**
 const { category: { type: { typeId } } } = product2;
console.log(typeId);

**/

// console.log(type); // Error 

// we can access two member at once
const { category: { type: { typeId,   } } } = product2;
console.log("nested Objects : ",  typeId, typeName);


