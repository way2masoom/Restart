// Generator demo

function* gen() {
    console.log("Inside generator");
    const x = yield 10;
    // return 88; // the rest code will not work
    const y = x + 30;
    yield y;
}

// Main program 
const it = gen();
console.log(it.next());

// if we not pass any value it return undefine
// console.log(it.next()); 
console.log(it.next(10));
console.log(it.next());
console.log(it.next()); // dead code
console.log(it.next());




