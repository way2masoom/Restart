// Function to demostract CustomItreator

function featchNextElement(arr) {
    // function for next falue
    let idx = 0;
    function next() {
        if (idx >= arr.length) {
            return { value: undefined, done: true };
        }

        const newElement = arr[idx];
        idx++;
        return { value: newElement, done: false };
    }

    return { next };
}

// main code
const arr = [1, 2, 3, 4, 5];
const autoFeatcher = featchNextElement(arr); // get {next: function} 

console.log(autoFeatcher.next()); // 1
console.log(autoFeatcher.next()); // 2 
console.log(autoFeatcher.next()); // 3
console.log(autoFeatcher.next()); // 4
console.log(autoFeatcher.next()); // 5
console.log(autoFeatcher.next()); // undefine

console.log(arr);


