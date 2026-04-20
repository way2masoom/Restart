// Constructor In js
// constructor in js have implement by default with every calls we make 
// but we can also create out own Constructor

// Constructor demo

class Product {

    // dataMembers
    name;
    price;
    description;
    ratting;

    // creating a custom constructor
    constructor(name, price, description, ratting) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.ratting = ratting;
    }

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

const iphone = new Product("iphone 14", 12345, "iphone is Powerful device", "4.5");
console.log(iphone);

iphone.addToCart();