// Defining Different ways of Function Expression

// Example-1 
const myFun = function fun() {
    console.log("Hello this is function expression");
}

// calling the function
myFun();
console.log();

// Example-2 // with parameters 
const myFun2 = function fun(x) {
    console.log("Hello this is function expression" + x);
}

// calling the function
myFun2(10);
console.log();


// Example 3
// Function Declaration
function fun() { //named function expression
    x = 10;
    console.log("Example One ", x);
}
fun(); // function call


// Example 4
const myFun4 = function (x) {  // anonymous function expression
    console.log(x);
}
myFun4("Example two ", 20); // function call

// Example 5
const arrowFun = ()=> {
    console.log("Arrow Function");
    
}
arrowFun(); // calling arrowFunction

// Example 6 
(function fun(x) { // IIFE - Immediately invoked function expression
    console.log("Example four", x);
})(30)