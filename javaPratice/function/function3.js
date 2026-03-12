function add(x, y) {
    return x + y;
}

// calling the function 
console.log(add(10, 20));


// function with default parameter
function defaultParameter(x, y = 30) {
    return x * y;
}

console.log(defaultParameter(10));

// function with default parameter
function threeParameter(x, y = 30, z) {
    return x * y + z;
}

console.log(threeParameter(10, 5, 10));
