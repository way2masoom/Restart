/**
Implement a set of dummy functions which can mimic the behavior of the following functions:

1. download: This function should mimic downloading of somecontent from a url
2. writeFile: This function should mimic writing of some content to a - file
3. upload: This function should mimic uploading the file to a server
Now after you've implemented these functions, try to use them in a scenario where we first
download a file, then write it to a disk and then upload it to a server.

*/

// funtion to simulate download from URl
function download(url, callback) {
    console.log("Starting Download From ", url);
    setTimeout(() => {
        const data = "Data from " + url; // dummy data

        callback(data)
    }, 2000);

}

// Function to simulate writing file
function writeFile(data, fileName, callback) {
    console.log("Writing data to:", fileName);
    setTimeout(() => {
        console.log("File written successfully");

        callback(fileName);
    }, 1500)

}

// Function to simulate upload to Server
function upload(fileName, uploadUrl, callback) {
    console.log("Uploading", fileName, "To", uploadUrl);
    setTimeout(() => {
        console.log("Uploded completed");

        callback("Upload Success");
    }, 3000);

}

// Main process function
function process() {

    // Step 1: Download
    download("https://example.com", function (data) {

        // Step 2: Write file
        writeFile(data, "file.txt", function (fileName) {

            // Step 3: Upload file
            upload(fileName, "https://upload.com", function (result) {

                // Final result
                console.log("All done:", result);

            });

        });

    });
}

// Call process
process();