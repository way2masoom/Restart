//Making a amazon prime function to check if the user is subscribed, unsubscribed, or a super user
let user = "subscribed";

if (user === "unsubscribed") {
    console.log("Show price and plans");
} else if (user === "subscribed") {
    console.log("Show Basic content");
} else if (user === "super") {
    console.log("Show premium content");
} else if (user === "super" && user == "prime") {
    console.log("Show prime content");
} else if (user === "super" && user == "liongate") {
    console.log("show jon wick movie");
} else {
    console.log("Show the Home page.");
}

console.log("Ending..."); // Final message indicating the end of the script
