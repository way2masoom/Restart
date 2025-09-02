// Recursion function to print the factorial of Number
// Using array.map and name & anonymous function


// Name function
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

const arr=[1,2,3,4,5]
console.log(arr.map(factorial));


// Recursion call with anonymous function

console.log("Anonymous Function");

const arr2=[2,4,8,6];
const fact=arr2.map(function (n){
    if(n==1) return 1;
    return n*arguments.callee(n-1);
})

console.log(fact);
