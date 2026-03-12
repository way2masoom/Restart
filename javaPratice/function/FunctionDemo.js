function add(a, b) {
    return a + b;
}

let result = add(5, 6);
// console.log("sum = " + result);

function greeting() {
    console.log("Hello good morning");
}

function greeting2() {
    console.log("Hello goodAfternoon ");
}

// greeting();
// greeting2();


// Odd or even number
function isEvenOrOdd(x) { // here x is 
    if (x % 2 == 0) {
        console.log(x + " is Event number");
    } else {
        console.log(x + " is Odd Number");
    }
}

isEvenOrOdd(11); // function call with parameter