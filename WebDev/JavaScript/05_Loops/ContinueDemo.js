// Continue statement in a loop
let i = 1; // Initialize the loop variable
while(i<=10) {
    if (i%7==0) {
        continue; // Skip the rest of the loop when i is 5
    }
    console.log(i); // This will log numbers 0 to 9, except for 5
    i++;
}       
console.log("Loop completed!"); // This will log after the loop is done
