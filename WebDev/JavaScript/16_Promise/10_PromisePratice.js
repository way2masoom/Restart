// ALL PROMISE DEMO

const promiseOne = new Promise(function (resolve, reject) {
    console.log("Executable callback triggered by promise constructor");
    setTimeout(() => {
        console.log("Async task  1 is done");
        resolve() // resolving the promise
    }, 1000)
})

// creating a promise object
promiseOne.then(function () {
    console.log("Promise consumed");
})


// Promise 2 demo
new Promise(function (res, rej) {
    console.log("Executiong Promise 2 contructor");
    setTimeout(() => {
        console.log("Async Task 2");
        res(); // resolving the promise
    }, 2000);

}).then(function () {
    console.log("Promise 2 consumed");

})

// promise 3
const promiseThree = new Promise(function (res, rej) {
    console.log("Promise 3 constructor");
    setTimeout(() => {
        console.log("Async task 3");
        res({ userName: "mdalam", email: "mdalam197@gmail.com" })
    }, 3000);
})

// callig promise 3 
promiseThree.then(function (user) {
    console.log("User Data : ", user);
    console.log("Username : ", user.userName);
    console.log("UserEmail : ", user.email);
})

// promise 4
const promiseFour = new Promise(function (resolve, reject) {
    console.log("Promise 5 constructor called");
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ userName: "Alam", password: "123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 4000);
});

// calling the promise 4
promiseFour.then((user) => {
    console.log("User Data : ", user);
    return user.userName;
}).then((userName) => {
    console.log("UserName : ", userName);
}).catch((error) => {
    console.log("Caught error ", error);
}).finally(() => {
    console.log("Your Promise is Either rejected or Resolved ");

})



// promise 5
const promiseFive = new Promise(function (resolve, reject) {
    console.log("Promise 5 constructor called");
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: "JavaScript", password: "1919" });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 5000);
})

// handeling promise with async and wait
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// Featch api promise
async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log("Error ", error);
    }
}

getAllUser();