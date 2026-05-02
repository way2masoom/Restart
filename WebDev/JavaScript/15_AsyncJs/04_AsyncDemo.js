// Demo of Async programming

function createTimer(time, timerId) {
    console.log("Creating a new timer with Id: ", timerId);
    setTimeout(() => {
        console.log(`Timer with Id ${timerId} is done`);
    }, time);
    console.log("Secufully created a new timer with Id : ", timerId);
}

console.log("Starting the Code ");

//Calling the Function
createTimer(2000, 1);
createTimer(0, 2)

console.log("STARTING LOOP");

for (let i = 0; i < 1000000000; i++) {
    // some task here 
}

console.log("Loop done");

console.log("Last Line of Code");


