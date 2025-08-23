// Note: JIT (Just-In-Time) compilation is handled by the JS engine (like V8 in Chrome/Node.js).
// You can't directly control JIT in JS, but running a function many times may trigger optimization.

function add(a, b) {
    return a + b;
}

// Warm-up loop to trigger JIT compilation
for (let i = 0; i < 1000000; i++) {
    add(1, 2);
}

console.time("JIT");
for (let i = 0; i < 1000000; i++) {
    add(1, 2);
}
console.timeEnd("JIT");