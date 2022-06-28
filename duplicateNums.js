function duplicatea(arr){
    let unique = 0;
    for(n in arr){
        unique ^= n;
    }

    return unique;
}
let arr = [3,2,1,4,3,2,1];
console.log(duplicatea(arr));