// variable In Scopes 
// var ---> It Support Function scopes or Global Scopes

var teacher="Sanket Singh";

function fun(){
    var teacher="Rohit shah"
    console.log("Hello ",teacher);
}

function gun(){
    var student="Alam"
    console.log(student);
}

// Calling the Functions
fun();
gun();