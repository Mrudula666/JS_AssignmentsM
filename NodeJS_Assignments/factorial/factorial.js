facto=function(){
    a=parseInt(document.getElementById("a").value);
    fac = factorial(a);
    document.getElementById("fact").value=fac;

}
var factorial = function(a){
    if(a==0){
    fact = 1;
    }
    else{
    fact = (a*factorial(a-1));
    }
    return fact;
}