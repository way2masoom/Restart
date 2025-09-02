// Custom implementation of the map function
function customMap(array, fn) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        // Call the callback on each element and push the return value into result
        result.push(fn(array[i])); 
    }
    return result;  // Return the new transformed array
}

const array = [1, 2, 3, 4, 5];

// Using customMap to multiply each element by 2
console.log("Mapped Array =", customMap(array, function fn(element) {
    return element * 2;
}));

console.log("Original array = ",array);

/****************** Custom Map Function end here   *********************/
console.log();


// Showing that the original array is unchanged
console.log("Original Array =", array);


// Example with built-in map
const arr = [1, 2, 3, 4, 5];

arr.map(function fn(element) {
    console.log("Receive Element", element);
    return element;
})

console.log();

// Example showing transformation with map
const arr2 = [1, 2, 3, 4, 5];

const newArray = arr2.map(function fn(element) {
    return element * 2; // Multiply each element by 2
});

// Logging results
console.log("New Array (after multiplication) =", newArray); // Transformed array
console.log("Original Array =", arr2); // Original remains unchanged

console.log();

// Array with square number || Parameter with square array number

const arr3=[1,2,3,4,5]

const squareArray=arr2.map(function square(element){
    return element*element;
})

console.log("Original Array = ",arr3);
console.log("Square array = ",squareArray);

