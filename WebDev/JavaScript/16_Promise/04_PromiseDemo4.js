// Promise demo 4
console.log("Starting Program");

// making a promise 
const p1 = new Promise(function exec(res, rej) {
    console.log("Executable callback triggered by promise p1 constructor");
    setTimeout(() => {
        console.log("Timer of p1 done");
        res(100);
    }, 500)
})

// calling the promise p1
p1.then(
    function a() { console.log("Executing Function A") },
    function b() { console.log("Executing Function B") }
);


setTimeout(function timerCB() {
    console.log("Timer 1 done");

}, 2000); // timer for 2 sec


// making another promise
const pr = new Promise(function exex(res, rej) {
    console.log("Executable callback triggered by promise pr constructor");

    setTimeout(function prCB() {
        // Generating a random number
        const randomeNumber = Math.floor(Math.random() * 100);
        console.log("Random number = " + randomeNumber);

        // checking if the number is odd or even
        if (randomeNumber % 2 === 0) {
            // NUmber is even
            res(randomeNumber);
        } else {
            // Number is odd
            rej(randomeNumber);
        }
    }, 3000);

})

pr.then(function f() {
    console.log("Executing function F")
}, function g() { console.log("Executing function G") });

pr.then(function h() {
    console.log("Executing function h")
}, function i() { console.log("Executing function I") });

// main thread 

// Making main thread Busy using loop
for (let i = 0; i < 1000000000; i++) {
    // some operation

}
for (let i = 0; i < 1000000000; i++) {
    // some operation
}

console.log("End Code");
