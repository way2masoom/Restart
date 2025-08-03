// Break demo

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at i =", i);
        break; // Exit the loop when i is 5
    }
    console.log("Current value of i:", i);
}
console.log("Loop has ended.");