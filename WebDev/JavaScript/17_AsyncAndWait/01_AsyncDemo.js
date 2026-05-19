// demo of async and wait function

// Function returning Promise
function getData() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            // the first call resolve will executed so this promise is resolved 
            resolve("Data received successfully");
            reject("Something went wrong")
        }, 2000);

    });
}


// Async function
async function demo() {
    console.log("Start");

    // Waiting for Promise
    const data = await getData();
    console.log(data);
    console.log("End");
}


// Calling function
demo();