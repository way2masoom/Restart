// Builder patter 2

class Product {
    #price
    #name;
    #description;

    // creating a constructor with builder
    constructor(builder) {
        console.log("Calling Product Constructor");

        this.#name = builder.name;
        // validation before object creation 
        if (builder.price >= 0 && typeof (builder.price) === "number") {
            this.#price = builder.price;
        } else {
            return {};
        }
        this.#description = builder.description;
    } 

    // Method to Display the product
    displayProduct() {
        console.log("Product Displayed :", this.#name, this.#price, this.#description);

    }

    static get Builder() {
        class Builder {
            constructor() {
                console.log("Calling Builder Constructor");

                this.price = 0; // default value
                this.name = "";
                this.description = "something";
            }

            // setter
            setName(incomingName) {
                this.name = incomingName;
                return this;
            }

            setPrice(incomingPrice) {
                this.price = incomingPrice;
                return this;
            }

            setDescription(incomingDescription) {
                this.description = incomingDescription;
                return this;
            }

            build() {
                return new Product(this);
            }
        }

        return Builder;
    }

}

// Creating object using builder-style input (object)
const p = new Product.Builder()
    .setName("Iphone 19")
    .setDescription("Best phone")
    .setPrice(196666)
    .build();

p.displayProduct();

