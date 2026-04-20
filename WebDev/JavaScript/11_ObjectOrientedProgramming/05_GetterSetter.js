//Getter and setter in calls

class Product {
    // members function
    name;
    price;
    category;
    description;

    // constructor 
    constructor(name, price, category, description) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }

    // Getter
    getPrice() {
        return this.price;
    }

    // another way to used getter
    get category() {
        return this.category;
    }

    get description() {
        return this.description;
    }

    // Setter
    setPrice(p) {
        if (p > 0) {
            return this.price = p;
        } else {
            console.log("Invalid Price");
        }
    }

    // another way of seater
    set category(c) {
        return this.category;
    }

    set description(d) {
        if (d.length === 0) {
            console.log("Invalid description");
            return;
        } 
        this.description = d;
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

}

// accessing the class
const iphone = new Product("Iphone 14", 134555, "phone", "best camera phone under budget");
console.log(iphone);

iphone.setPrice(109500); // setting the price of iphone
console.log(iphone.getPrice()); // getting the price of iphone

iphone.description = ("Best gaming phone"); // setting the description
console.log(iphone.description); // getting the description
