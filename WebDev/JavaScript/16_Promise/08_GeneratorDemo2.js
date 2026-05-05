// Generator function demo 2
function* gen(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("Inside generator");
        if (i % 2 == 0)
            yield array[i];

    }
}

const arr = [1, 2, 3, 4, 5, 10, 12];

// Create generator object (iterator)
const i = gen(arr)
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
