// 
function hello() { console.log("hello function") }
setTimeout(hello, 2000);

// we can simply make fucntion with setTimeout like this
setTimeout(() => {
    console.log("Hello from setTimeout");
}, 3000);

// Example of callback
function getData(dataID, getNextData) {
    // timer for 2 sec
    setTimeout(() => {
        console.log("Data : ", dataID);
        if (getNextData) {
            getNextData();
        }

    }, 2000);

}

// call back hell created
getData(1, () => {
    console.log("Getting data 2 ....");
    getData(2, () => {
        console.log("Getting data 3 ....");
        getData(3, () => {
            console.log("Getting data 4 ....");
            getData(4)
        })
    })
})


// function getNewData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Resolveing the promise");
//             resolve(100);
//             if (getNewData) {
//                 getNewData();
//             }
//         }, 400);
//     })
// }

// getNewData(99, () => {
//     console.log("Getting new Data");

// })