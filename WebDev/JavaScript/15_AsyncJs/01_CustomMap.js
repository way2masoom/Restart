// custom map functin
function myMap(arr, callback) {
    let result = []; // new array to store results
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

// calling the custom map function
const arr = [1, 2, 3, 4, 5];
const output = myMap(arr, function (element) {
    return element * 2;
})

console.log(output);
