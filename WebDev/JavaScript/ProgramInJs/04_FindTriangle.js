// Given a valid triangle a,b,c and find out 
// The given triangle is Equilateral Triangle,Isosceles Triangle or Scalene Triangle

function findTriangle(a,b,c){
    // condition for Equilateral Triangle
    if(a===b && b===c && c===a){
        console.log("Is a Equilateral Triangle");
    }else if(a===b || b===c || c===a){
        console.log("Is a Isosceles Triangle");
    }else if(a!==b && b!==c && c!==a){
        console.log("Is a Scalene Triangle");
    }
}

// Valid Triangle as Input
// let a = 5, b = 6, c = 7;
// let a = 5, b = 5, c = 5;
let a=10,b=10,c=20;

// calling the Function
findTriangle(a,b,c);