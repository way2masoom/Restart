// Fibonacci Series From 0 to N

function printFibonacciNumber(n){
    // Base condition  // If n == 0, only print 0
    if(n==0){
        console.log("0");
    }

    // If n >= 1, print first two numbers (0 and 1)
    if(n>=1){
        console.log("0");
        console.log("1");
    }

    // First two value of Fibonacci series
    let first=0;
    let second=1;

    // Generate and print Fibonacci numbers from 2 to n
    for(let i=2;i<=n;i++){
        let nextFibonacci=first+second;
        console.log(nextFibonacci);

        // updating the values for the next fibonacci series /iteration
        first=second;
        second=nextFibonacci;
    }
}


// Call the Fibonacci function
printFibonacciNumber(10); // Example: prints first 10 Fibonacci numbers