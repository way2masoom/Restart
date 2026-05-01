// Synchronous |Sync| nature of Js Example


console.log("Start");

// First heavy loop (blocks execution)
for (let i = 0; i < 100000000000; i++) {
    // some operation
}

// Second heavy loop (runs only after first finishes)
for (let i = 0; i < 1000000000; i++) {
    // some operation
}

// This runs only after both loops complete
console.log("End");