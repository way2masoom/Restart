// Call function in Prototype

const obj = {
    firstName: "Alam",
    greet: function (welcomeMsg) {
        console.log("Hello my name is ", this.firstName, welcomeMsg);
    }
}

// Calling normally
console.log(obj.greet("how can i help you"));

// creating an object
const newObj = { firstName: "Rohit" };

// Using call (change this)
console.log(obj.greet.call(newObj, "how are you"));


// Another example 

// Standalone function
function greet(msg) {
    console.log("Hello my name is", this.firstName, msg);
}

// Objects
const user1 = { firstName: "Alam" };
const user2 = { firstName: "Rohit" };

// Reusing same function
greet.call(user1, "welcome");
greet.call(user2, "how are you");