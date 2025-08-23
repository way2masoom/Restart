// This variable is in the global scope
let globalVariable = 10;
let msg='Good Morning';

function fun() {
    // Can access globalMessage because it's in the global scope
    console.log(globalVariable);
    console.log(msg);
    
}
fun(); // Call the function to demonstrate access to global variables

// calling again the globalVariable
console.log("Variable value : ",globalVariable);
