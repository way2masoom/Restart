// Promise with Generator function


// Function to simulate downloading data from URL
function download(url) {
    // Returning Promise object
    return new Promise(function exec(res, rej) {
        console.log("Downloading Data from:", url);
        setTimeout(() => {
            let data = "Some data From " + url;
            console.log("Downloaded data from", url);
            res(data);
        }, 3000);
    })


}

// Function to simulate writing data to file
function writeFile(data, fileName) {
    // Returning Promise object
    return new Promise(function exec(res, rej) {
        console.log("Write ", data, " To ", fileName);
        setTimeout(() => {
            console.log("Writing to file", fileName, "is done");
            let status = "sucess"; // writing result
            res(status)
        }, 1500);
    })

}

// Function to simulate uploading file to server
function upload(fileName, url) {
    // Returning Promise object
    return new Promise(function exec(res, rej) {
        console.log("Uploading file", fileName, "to:", url);
        setTimeout(() => {
            console.log("Updoding Done");
            let uploadStatus = "Uploding sucessfull"
            res(uploadStatus)
        }, 3000)
    })
}


/* kind of mainual implemenatation of Async and wait function */

// fucntion with yield  
function* exec() {
    console.log("Starting the execution");

    const downloadedData = yield download("https://www.example.com");
    console.log(downloadedData);

    const fileResponse = yield writeFile(downloadedData, "example.txt");
    console.log(fileResponse);

    const uploadStatus = yield upload("example.txt", "https://www.example1.com");
    console.log(uploadStatus);

    return uploadStatus;

}


const it = exec(); // exec fucntion will return a generator object having iterator

const ft = it.next();
console.log("Ft is = ", ft);
ft.value.then(function doAfterReceiving(value) {
    console.log("calling after receiving is finished", value);
    const future = it.next(value)
    if (future.done) return;
    future.value.then(doAfterReceiving)
})
