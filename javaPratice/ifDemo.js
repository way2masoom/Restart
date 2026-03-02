// let user = "premium";
let user = "super"

if (user == "unsubscribe") {
    console.log("Show price and plans");
} else if (user === "premium") {
    console.log("Display all the Premium content");
} else if (user === "prime" && user === "super") {
    console.log("Display all Premium content + The Jungle Book");
} else {
    console.log("Display Home page");
}

console.log("Ending..."); // Final message indicating the end of the script