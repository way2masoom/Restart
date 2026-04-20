// Older method
// constructor using function

function Product(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.displayProduct = function () {
        console.log("Name :", this.name,
            "price :", this.price,
            "Description :", this.description)
    }

}

// creating the object
const iphone = new Product("Iphone 13", 12345, "best gaming phone");
console.log(iphone);
 