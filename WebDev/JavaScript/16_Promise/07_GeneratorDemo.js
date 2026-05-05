// Generator function demo
function* myGenerator() {
    console.log("inside generator");
    yield 100 // pause execution and return value

    console.log("line 4");
    yield 99 // pause execution and return value

    console.log("line 6");
    yield 87;

    console.log("line 8");
    yield -1;

    console.log("line 10");
}

// Create generator object (iterator)
const i = myGenerator(); // i get a next() function

console.log(i.next()); 
console.log("Out");
 
console.log(i.next());
console.log("Out");

console.log(i.next());
console.log("Out");

console.log(i.next());
console.log("Out");

console.log(i.next());
console.log("Out");

console.log(i.next());
console.log("Out");
