// String and more in function 

// Types of string we can used 
const s1="hello \n world"
const s2='how are \t you'
const s3=`Hello this is "Md Alam" and i am '20' years old`


console.log(s1);
console.log(s2);
console.log(s3);

const FirstName="Md Alam"
console.log(FirstName.concat("$"," is a web developer"));

console.log("Md Alam"+" is a web developer"); // Plus Operator helps to add two strings together

console.log(FirstName.toUpperCase());
console.log(FirstName.toLowerCase());
console.log(FirstName.length);
console.log(FirstName.charAt(0)); // it provide first character
console.log(FirstName.indexOf("A")); // it provide first index of "A"
console.log(FirstName.lastIndexOf("a")); // it provide last index of "a"

// Having output in same line
const x1="abc"
const x2="def"
const x3="ghi"
// console.log(x1.concat("",x2,x3));
const result=x1+x2+x3;
console.log(result);
