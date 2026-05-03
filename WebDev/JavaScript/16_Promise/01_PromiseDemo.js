// Creating a promise demo

const pr = new Promise((res, rej) => {
    console.log("Executable callback triggered by promise constructor");
    for (let i = 0; i < 10000000000; i++) {
        // some logical operation
    }

});

console.log("Creating the promise object");
console.log(pr);

