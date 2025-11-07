// ObjectPreventExtension.js
// Object.preventExtensions(obj) makes an object non-extensible — you cannot add new properties,
// but you can still modify or delete existing ones.


const user = {
    name: 'Alam', age: 30
};

// Adding a property BEFORE preventExtensions → works
user.email = 'alam@example.com'; 


Object.preventExtensions(user);

// Object is now non-extensible — new properties cannot be added
console.log('before preventExtensions:', user);


// Existing properties can still be updated
user.age = 31;
console.log('modified age:', user.age);

// Existing properties can still be deleted
delete user.email;
console.log('after deleting email:', user);

// Final object output
console.log('final object:', user);

