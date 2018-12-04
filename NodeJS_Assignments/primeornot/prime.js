Prime=function(){
    a = parseInt(document.getElementById("a").value);
    pri = prime(a);
    document.getElementById("prime").value = pri;
}
var prime=function(a){
    count =0;
    for(i=2;i<=a/2;++i){
        if(a%i==0)
        count++;
    }
    if(count == 0){
        ans = "prime";
    }
    else{
    ans = "Not Prime";
    }
    return ans;
}