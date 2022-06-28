let sum = 0;
let val = 0;

function reverse(num) {
    if(num<10) return num;
    
    val = (num%10) + reverse(Math.floor(num/10)); 
    sum = sum*10 + val;

    return sum;
}

result = reverse(12345);

console.log(result);