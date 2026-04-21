// Builder Design Patterns

class Product {
    // Builder constructor
    constructor(builder) {
        this.name = builder.name;
        // adding validation before assigning
        if (builder.price >= 0 && typeof (builder.price) === "number") {
            this.price = builder.price;
        }
        this.description = builder.description;
        this.category = builder.category;
    }

    // getter and setter
    get price() {
        return this.price
    }

    //setter
    set price(p) {
        if (p > 0) {
            return this.price = p;
        } else {
            console.log("Invalid Price");
        }
    }
}

// Creating object using builder-style input (object)
const p = new Product({
    name: "Iphone 18 pro",
    price: 197333,
    description: "Best camera phone",
    category: "phone"
});

console.log(p);
