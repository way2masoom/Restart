// variable In Scopes 
// var ---> It Support Function scopes or Global Scopes

var teacher = "Sanket Singh"; // Global Scopes

function fun() {
    var teacher = "Rohit shah"
    console.log("Hello ", teacher);

    function gun() {
        var student = "Alam"
        console.log(student, teacher); // Global Scopes Teacher will access here
    }
    gun();
}



// Calling the Functions
fun();
