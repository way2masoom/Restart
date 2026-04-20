// Static in Class

class Product {
    static x = 10;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        console.log(Product.x);

    }
}

const p1 = new Product("iphone 12", 197777);
console.log(p1);

console.log(p1.x);
Product.x = 20;
console.log(Product.x);

