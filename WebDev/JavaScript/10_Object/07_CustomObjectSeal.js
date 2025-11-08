// Making custom object.seal

function customSeal(obj){
   let keys=Object.keys(obj);
    for(let i=0;i<keys.length;i++){
        Object.defineProperty(obj,keys[i],{configurable:false,writable:false}) // Can update value but can't delete the value
    };
    Object.preventExtensions(obj); // this will stop addition of new value pair
    
    return obj;
}

// Product
const product={
    name:"Apple Watch",
    Model:"Series 9",
    price:"16000"
}

// calling the custom seal function

const customFun=customSeal(product);
console.log(customFun);
