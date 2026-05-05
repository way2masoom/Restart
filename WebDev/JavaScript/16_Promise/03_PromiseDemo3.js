// Promise demo 3

const pr = new Promise(function exex(res, rej) {
    console.log("Executable callback triggered by promise constructor");

    setTimeout(() => {
        // Generating a random number
        const randomeNumber = Math.floor(Math.random() * 100);
        console.log("Random number = " + randomeNumber);

        // checking if the number is odd or even
        if (randomeNumber % 2 === 0) {
            // NUmber is even
            res();
        } else {
            // Number is odd
            rej();
        }
    }, 5000);

})

console.log("Creating a Promise Object");

console.log(pr);

