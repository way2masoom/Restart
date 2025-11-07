// Object.freeze() help us make the object completely Immutable
// This provides highest level of immutability. It creates a frozen object which means
// We cannot add new key value pairs
// We cannot remove existing key value pairs
// We cannot update existing key value pairs

const product = {
  name: "Wireless Mouse",
  brand: "Logitech",
  price: 899,
  inStock: true
};

// Freeze the object
Object.freeze(product);

// Trying to modify the object after freezing 

product.price=199           // ❌ Change won't happen
console.log(product);

product.name="Keyboard"     // ❌ New property won't be added
console.log(product);

delete product.price        // ❌ Cannot delete property
console.log(product);

