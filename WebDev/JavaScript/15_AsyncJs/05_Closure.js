// Example of Closure

function outer(x) {
    let y = 5;

    function inner() {
        console.log("Value is:", x + y);
    }

    return inner;
}

const result = outer(10);
result();