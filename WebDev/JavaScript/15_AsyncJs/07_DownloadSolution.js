/**
Implement a set of dummy functions which can mimic the behavior of the following functions:

1. download: This function should mimic downloading of somecontent from a url
2. writeFile: This function should mimic writing of some content to a - file
3. upload: This function should mimic uploading the file to a server
Now after you've implemented these functions, try to use them in a scenario where we first
download a file, then write it to a disk and then upload it to a server.

*/

// Function to simulate downloading data from URL
function download(url, callback) {
    console.log("Downloading Data from:", url);
    setTimeout(() => {
        console.log("Downloaded done");
        let downloadedData = "Some data";

        callback?.(downloadedData) // Forwarding/Pass data to next function

    }, 2000);

}

// Function to simulate writing data to file
function writeFile(data, fileName, callback) {
    console.log("Write ", data, " To ", fileName);
    setTimeout(() => {
        console.log("Writing to file", fileName, "is done");
        let status = "sucess"; // writing result

        callback?.(status)
    }, 1500);

}

// Function to simulate uploading file to server
function upload(fileName, url, callback) {
    console.log("Uploading file", fileName, "to:", url);
    setTimeout(() => {
        console.log("Updoding Done");
        let uploadStatus = "Uploding sucessfull"
        callback?.(uploadStatus)
    }, 3000)
}


// Main process function
function process() {

    // Step 1: Start download
    download("https://www.example.com", function handelDownload(data) {

        // Step 2: After download completes, we get 'data'
        // Now pass that data to writeFile
        writeFile(data, "File.txt", function handelWrite(status) {

            // Step 3: After file is written, we get 'status'
            // Now upload the file
            upload("file.txt", "https://www.example1.com", function handelUpload(uploadStatus) {

                // Step 4: After upload is complete
                console.log("All done");

            })
        })
    })

}

// Call the process
process();