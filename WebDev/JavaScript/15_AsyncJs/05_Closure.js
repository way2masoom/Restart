// Example of Closure
// Closure is a mechanism by which a function remembers the variables present in 
// its outer function scope, even after the outer function execution is completed.

function outer(x) {
    let y = 5;

    function inner() {
        console.log("Value is:", x + y);
    }

    return inner;
}

const result = outer(10);
result();