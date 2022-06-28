function nums(n){
    if(n==0){
        return;
    }
    console.log(n);
    nums(n--);
    
}

nums(5)