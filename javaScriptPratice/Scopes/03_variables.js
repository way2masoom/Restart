// variable In Scopes 
// var ---> It Support Function scopes or Global Scopes

var teacher = "Rohit shah";

function fun() {
    var teacher = "arjun Shah"
    console.log("hello",teacher);
}

function gun() {
    var student = "Alam"
    console.log(student);
}

// Calling the Functions
fun();
gun();