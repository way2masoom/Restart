// Private Fields in JS
// Private fields are variables inside a class that cannot be accessed
// or modified directly from outside the class.

// We define private fields using # symbol
// They provide data hiding (encapsulation)

// example
class Product {
    // defining the product 
    #name; // making name as private
    #price; // making price as private
    description;
    ratting;

    // Members function
    constructor(name, price, description, ratting) {
        this.#name = name;
        this.#price = price;
        this.description = description;
        this.ratting = ratting;
    }

    // Buy the product
    buyProduct() {
        console.log("Buying the product");
    }

    addToCart() {
        console.log("Adding to the Cart");
    }

    removeCart() {
        console.log("Removing the product from the cart");

    }
    displayProduct() {
        console.log("displaying product", this.#name, this.#price, this);

    }

}

// Creating objects using constructor
const iphone = new Product("Iphone 16 Pro", 120000, "Best Phone", "5.2");
console.log(iphone);

iphone.addToCart();
iphone.displayProduct();

// iphone.#name = "iphone 13"; // throw error
// console.log(iphone);
