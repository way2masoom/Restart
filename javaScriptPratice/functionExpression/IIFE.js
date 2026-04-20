// IIFE(Immediately Invoke function expression)

(function () {
    console.log("Hello from IIFE");
})();


// Square of number
(function square(x) {
    console.log("Square of number is = ",x*x);
})(5);

// IIFE with return values
const result = (function (a, b) {
    return a + b;
})(3, 4);

console.log(result);