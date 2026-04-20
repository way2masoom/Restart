//Custom map function

function customMap(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(fn(arr[i]));
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];
console.log("Map Array = ", customMap(arr, function fn(element){
    return element*2;
}));

// original array
console.log("Original array =",arr);


