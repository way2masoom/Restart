/**
Implement a set of dummy functions which can mimic the behavior of the following functions:

1. download: This function should mimic downloading of somecontent from a url
2. writeFile: This function should mimic writing of some content to a - file
3. upload: This function should mimic uploading the file to a server
Now after you've implemented these functions, try to use them in a scenario where we first
download a file, then write it to a disk and then upload it to a server.

/**
 Promise Based Solution
 download -> writeFile -> upload
*/

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


/*

// Main process function using callback
function process() {

    // Step 1: Start download
    download("https://www.example.com", function handelDownload(data) {

        // Step 2: After download completes, we get 'data'
        // Now pass that data to writeFile
        writeFile(data, "File.txt", function handelWrite(status) {

            // Step 3: After file is written, we get 'status'
            // Now upload the file
            upload("file.txt", "ç, function handelUpload(uploadStatus) {

                // Step 4: After upload is complete
                console.log("All done");

            })
        })
    })

}

// Call the process
process();

*/

// Main process function using promis
function process() {
    download("https://www.example.com")
        .then(function handelDownload(data) {
            console.log("Downloaded data:", data);
            // Step 2: Write file after download completes
            return writeFile(data, "file.txt");
        }).then(function handelWrite(status) {
            console.log("Write status:", status);

            // Step 3: Upload file after writing completes
            return upload("file.txt", "https://www.example1.com");
        }).then(function handelUpload(uploadStatus) {
            console.log("Upload status:", uploadStatus);

            // Final message
            console.log("All done");

        }).catch(function handelError(error) {
            console.log("Error occurred:", error);
        })
}
//calling the process fucntion for executation
process();