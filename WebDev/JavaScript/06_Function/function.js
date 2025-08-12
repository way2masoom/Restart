// Function Parameters with PreDefine

function add(x, y = 10) {
    console.log(x);
    console.log(y);

    return x + y;
}

function add2(x, y = 10, z) {
    console.log(x);
    console.log(y);
    console.log(z);


    return x + y + z;
}

console.log("Function call : ",add(10)); // if we don't pass any parameter then i will take Default value
console.log();

console.log("Function call : ",add(5, 10)); // If we pass the value then with Take current value
console.log();

console.log("Function call : ",add2(5, 10, 7))

