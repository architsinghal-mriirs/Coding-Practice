function sumOfDigits(n){    
    if(n<10) return n;
    return Math.floor(n%10) + sumOfDigits(Math.floor(n/10));
}

result = sumOfDigits(1234);

console.log(result);