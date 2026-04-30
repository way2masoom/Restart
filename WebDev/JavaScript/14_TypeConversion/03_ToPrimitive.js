// ToPrimitive example

const obj = {
    valueOf() {
        return 10;
    }
};

console.log(obj + 5);


