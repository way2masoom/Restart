// Making an hostar function to check if the user is supscribed or unscribed or super user

let user = "unsubscribed";

if (user === "unsubscribed") {
    console.log("Show price and plans");
} else if (user === "subscribed") {
    console.log("Show Basic content)");
} else if (user === "super"){
    console.log("Show premium content");
} else {
    console.log("Show the Home page.");
}

console.log("Ending..."); // Final message indicating the end of the script
