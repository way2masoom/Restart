// Demo of class in JS

class product{

    // Data members
    name;
    price;
    description;
    ratting;

    // Member Functions
    addToCart(){
        console.log("Product added to Cart");
    }

    removeFromCart(){
        console.log("Product removed from cart");
    }
    buyMethod(){
        console.log("Method to buy the product");
    }

    displayProduct(){
        console.log("Displaying the product");
    }
}

// checking the type of the class 

console.log(typeof(product)); // function, it means class is a kind of function
