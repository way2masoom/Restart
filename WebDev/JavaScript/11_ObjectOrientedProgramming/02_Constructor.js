// Constructor In js
// constructor in js have implement by default with every calls we make 
// but we can also create out own Constructor

// Constructor demo
class Product{
    // defining the product 
    name;
    price;
    description;
    ratting;

    // Members function
    constructor(name,price,description,ratting){
        this.name=name;
        this.price=price;
        this.description=description;
        this.ratting=ratting;
    }

    // Buy the product
    buyProduct(){
        console.log("Buying the product");
    }

    addToCart(){
        console.log("Adding to the Cart");
        
    }

    removeCart(){
        console.log("Removing the product from the cart");
        
    }

}

// Creating objects using constructor
const iphone=new Product("Iphone 16 Pro",120000,"Best Phone","5.2");
console.log(iphone);

product1.addToCart();
