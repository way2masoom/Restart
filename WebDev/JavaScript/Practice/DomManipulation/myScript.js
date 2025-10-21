console.log("Testing JS");

let a=document.getElementById("heading1");
// types of object we can used with document to change the text of html 
// a.innerHTML="Heading change";
// a.textContent="Hello world"
// a.innerText="Heading change again"

// Different between them 
console.log(a.innerHTML);
console.log(a.textContent);
console.log(a.innerText);


//Changing Style 
let b=document.querySelector(".para1");
b.style.color="blue";

let c=document.getElementsByClassName("para")
c[1].style.backgroundColor="#444";

document.body.style.backgroundColor="#ff3";
document.body.style.color="blue";



