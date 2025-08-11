// function will display undefine if we manually don't return anything

function test(){
    let x=10;
    x+=2;
}

let ans=test();
console.log(ans); // it will display undefine if don't define the function value
