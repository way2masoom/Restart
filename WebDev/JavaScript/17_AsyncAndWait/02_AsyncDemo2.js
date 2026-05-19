// Function returning Promise
function getData() {
    return new Promise(function (resolve, reject) {
        console.log("Starting a promise");
        setTimeout(() => {
            let error = false;

            if (!error) {
                resolve("Data received successfully");
            } else {
                reject("Something went wrong");
            }

        }, 2000);

    })
}


// Async function
async function demo() {
    console.log("Main code");

    try {
        const data = await getData();
        console.log(data);

    } catch (error) {
        console.log("Error:", error);
    }

    console.log("End");
}

// Calling function
demo();