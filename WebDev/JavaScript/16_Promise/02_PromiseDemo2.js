// Promise demo
const pr = new Promise(function exec(res, rej) {
    console.log("Executable callback triggered by promise constructor");

    // creating random number
    const randomeNumber = Math.floor(Math.random() * 100);

    // Cecking is the number is odd or even
    if (randomeNumber % 2 === 0) {
       // Number is even
        res();
    } else {
        //Number is Odd
        rej();
    }
});

console.log("Creating a promise Object");
console.log(pr);

