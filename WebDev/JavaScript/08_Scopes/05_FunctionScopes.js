// Function scopes / Local Scope
// It is only visible Inside any function Not outside the function 


function localScope() {
    let x = 5; // function Variable
    console.log("Local Call ", x);

}


// Calling the Function
localScope(); // X is available here at Function call

// trying to access the x out side the function
//  console.log(x); // throw an error as x is not define

