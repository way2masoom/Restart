// In JS Function are first-class citizens
// In JavaScript, functions can be used to make classes and objects
// Js it Function based Programming language
// In js Function can be return from the function and function can be passed as an argument to another function

function someFunction() {
    return function x(){
        return 5;
    }
}

// Function call
const result = someFunction()();
console.log(result);

// Another function example
function anotherFunction(f1){
    f1() // we expect a function here
    console.log("F1 called")
}

function hello(){
    console.log("Hello from another function");
}

// Function call
anotherFunction(hello); // Passing the hello function not the result of the hello function

// We used TypeOf function to check the function or any variable type
console.log(typeof anotherFunction);
let x=10;
console.log(typeof x);
