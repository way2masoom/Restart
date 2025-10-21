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

document.body.style.backgroundColor="#fff";
document.body.style.color="Red";

// Adding a New Element in HTML
let newElement=document.createElement("h2");
newElement.innerText=   "Hello, I am New Element";
document.body.appendChild(newElement);

// Removing the element
let removeElement=document.getElementsByTagName("h1") [1];
removeElement.remove();