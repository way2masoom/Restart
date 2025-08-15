// Check if the number is prime or not

function isPrime(number) {
    // Numbers less than 2 are not prime
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number - 1; i += 1) {
        if (number % i == 0) {
            return false;
        } 
    }
    return true;
}

const PrimeNumber = isPrime(2);

if (PrimeNumber == true) {
    console.log("Yes it's prime number");
} else {
    console.log("NO it's a prime number");
}

