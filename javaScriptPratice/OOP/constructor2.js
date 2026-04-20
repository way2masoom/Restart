// constructor with arrow function

// 
let obj = {
    x: 10,
    y: 20,
    fn: function () {
        console.log(this.x, this.y);
    }
}

obj.fn();

// Object with arrow function
// Arrow functions DO NOT have their own 'this' so,
// Arrow functions use lexical scoping for 'this'
let obj2 = {
    x: 10,
    y: 20,
    fn: () => {
        console.log(this.x, this.y);
    }
}

obj2.fn();