// Class demo

class Product {

    // dataMembers
    name;
    price;
    description;
    ratting;

    // Member function
    addToCart() {
        console.log("Product added to Cart");

    }

    removeFromCart() {
        console.log("Product removed from Cart");
    }

    displayProduct() {
        console.log("Displaying the product ");
    }

    buyProduct() {
        console.log("Buying the product")
    }
}

let iphone = new Product();
console.log(iphone);
