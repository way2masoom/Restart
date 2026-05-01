// Asynchrounous demo 

setTimeout(function f() {
    console.log("Hello world");
}, 3000);

console.log("End");


// Another example

console.log("Start");

// First task (runs later)
setTimeout(() => {
    for (let i = 0; i < 100000000; i++) {
        // some operation
    }
    console.log("First loop done");
}, 0);

// Second task (runs later)
setTimeout(() => {
    for (let i = 0; i < 100000000; i++) {
        // some operation
    }
    console.log("Second loop done");
}, 0);

// This runs immediately
console.log("End");