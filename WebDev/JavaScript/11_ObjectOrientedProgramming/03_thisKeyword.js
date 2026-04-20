// this keyword

let obj = {
    x: 10,
    y: 20,
    fn: function fun() {
        console.log(this.x, this.y);

    }
}

// object
console.log(obj.fn());

// this keyword with arrow function

let obj2 = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: function fun() {
            console.log(this.x, this.y);
        }
    }
}

// object
console.log(obj2.z.fn());