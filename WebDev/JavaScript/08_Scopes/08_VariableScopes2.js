// Variable Scopes 
// Var and let Differences

function fun(){
    console.log("The Value of X :",x); // Using the value of X before Declaration
    var x=10;
    console.log("The Value of X :",x); // Using the value of X After Declaration 
}

fun(); // Function Runs will no Error  Because of the Var 
        // As Var is a Function and Global Scopes
     
        
// Another function 
function gun(){
     console.log("The Value of X :",x); // Using the value of X before Declaration
    let x=10;
    console.log("The Value of X :",x); // Using the value of X After Declaration 
}

gun(); // Function will give An  Error  Because of the let 
        // As let is a Block Scopes Only can can't be access without defining first