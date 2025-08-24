// Auto Globals Scopes
let teacher="Sanket singh"

function fun(){
    teacher="Rohit"  // If there is no formal Declaration the the Scope will convert into Global Scopes
    content="js"
    console.log("Hello",teacher,content);
}

fun();
console.log(content);
console.log(teacher);
