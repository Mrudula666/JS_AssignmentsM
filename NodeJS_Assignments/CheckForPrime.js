Prime=function(){
    var number = 14;
    pri = prime(number);
    console.log(pri);
}
var prime=function(a){
    count =0;
    for(i=2;i<=a/2;++i){//checking the factors of the number.
        if(a%i==0)
        count++;
    }
    if(count == 0){////checking whether the number is prime or not
        ans = "prime";
    }
    else{
    ans = "Not Prime";
    }
    return ans;
}
Prime();//calling the function