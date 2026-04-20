const obj = {
    x:20,
    y:30
};

// console.log(obj.x);
// console.log(Object.entries(obj));

obj.z = 99;
// console.log(obj); // here we can add new value pairs

//  obj = { a: 10 }; // this will give error [Assignment to constant variable.]

// 'Object.seal' in js
let product = {
    name: "Iphone 13 pro",
    price: 123088,
    color: "gress"
};

console.log(product);

// Object.seal help us to make immutable
// we can't add new value pairs or delete existing key
// but we can update update existing key value pairs.
 
Object.seal(product);

delete product.name;
console.log("Trying  to delete : ",product);

product.name = "Iphone 14 pro";
product.color="Black"
console.log("Updated the name : ", product);

console.log("checking the product is Sealed or not = ", Object.isSealed(product));
console.log("checking the product is Frozen or not = ", Object.isFrozen(product));





