// Function demo of Itrator 

function fetchNextElement(arr) {
    //creating a fuction next
    let idx = 0;
    function next() {
        if (idx >= arr.length) {
            return undefined;
        }

        const newElement = arr[idx];
        idx++;
        return newElement;
    }
    return next;
}

// Main code
const arr = [1, 2, 3, 4, 5]; // array elements

const nextElement = fetchNextElement(arr);

console.log(nextElement()); // 1
console.log(nextElement()); // 2
console.log(nextElement()); // 3

// supose i want 4 after some operation 
for (let i = 0; i < 1000000000; i++) {
    // some operation
}

console.log(nextElement()); // 4
console.log(nextElement()); // 5
console.log(nextElement()); // undefined

