// First way 

//  DarkMod function 
// function DarkMod() {
//     document.body.style.backgroundColor = "#333";
// }

// LightMod function
// function LightMod() {
//     document.body.style.backgroundColor = "#FFF";
// }

// second way 

let btn = document.getElementsByTagName("button");
btn[0].addEventListener('click', DarkMod); // function passed in eventListener

btn[1].addEventListener('click', () => {
    document.body.style.backgroundColor = "#fff" }) // Made function here

function DarkMod() {
    document.body.style.backgroundColor = "#333"
}

