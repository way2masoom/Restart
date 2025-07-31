// If demo
console.log("Starting...");

let isUserLoggedIn = true; // Change this to false to test the else block

if (isUserLoggedIn === true) {
    console.log("Show the basic content");
} else {
    console.log("show the login page.");
}

console.log();

// another condition example
let isPaiduser = false;

if (isUserLoggedIn === true && isPaiduser === true) {
    console.log("Show premium content.");
} else if (isUserLoggedIn === true) {
    console.log("show the bsic content.");
} else {
    console.log("Show basic content.");
}

console.log("Ending...");
console.log("This is the end of the ifDemo.js script."); // Final message indicating the