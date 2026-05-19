// Download problem using async and wait fucntion

/**
Implement a set of dummy functions which can mimic the behavior of the following functions:

1. download: This function should mimic downloading of somecontent from a url
2. writeFile: This function should mimic writing of some content to a - file
3. upload: This function should mimic uploading the file to a server
Now after you've implemented these functions, try to use them in a scenario where we first
download a file, then write it to a disk and then upload it to a server.

**/

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


// fucntion with yield 
async function exec() {
    // used try cath for error checking 
    try {
        console.log("Starting the execution");

        const downloadedData = await download("https://www.example.com");
        console.log(downloadedData);

        const fileResponse = await writeFile(downloadedData, "example.txt");
        console.log(fileResponse);

        const uploadStatus = await upload("example.txt", "https://www.example1.com");
        console.log(uploadStatus);

        return uploadStatus;
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

// calling the exece function
exec().then(function (v) {
    console.log("Exec function done", v);
})
