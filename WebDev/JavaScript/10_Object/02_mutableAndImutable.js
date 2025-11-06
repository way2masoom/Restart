// Mutability: If a variable value can change/Update it is Mutable

let x=99;
x=101; // value updated 

console.log(x);

// Immutability : If variable's value cannot be changed after assigned, It is immutable
const y=50;
// y=100; // error Value cannot be updated 

console.log(y);

console.log();

// Mutable Object
const obj={x:10,y:20};
obj.z=99; // here we can add the new property to the object so it is mutable too
console.log(obj);

// obj={a:10}; // but changing Object is not allowed, So Const also not fully mutable
