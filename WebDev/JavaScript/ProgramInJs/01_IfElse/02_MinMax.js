// Program to find the minimum and maximum among 3 numbers

// Function for minimum number
function minNumber(num1,num2,num3){
    if(num1<num2 && num1<num3){
        console.log("Num 1 is Minimum ",num1);
    }else if(num2<num1 && num2<num3){
        console.log("Num 2 is Minimum ",num2);
    }else{
        console.log("Num 3 is Minium ",num3);
    }
}

// Function for Maximum number
function maxNumber(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log("Num 1 is Maximum ",num1);
    }else if(num2>num1 && num2>num3){
        console.log("Num 2 is Maximum ",num2);
    }else{
        console.log("Num 3 is Minium ",num3);
    }
}

let num1=10,num2=20,num3=6;

// Function call for Maximum Number
maxNumber(num1,num2,num3);

// Function call for Minimum Number
minNumber(num1,num2,num3);

