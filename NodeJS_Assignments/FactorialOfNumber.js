mainFunction=function(){
    var number = 3;
    fac = factorial(number);
    console.log(fac);

}
var factorial = function(a){
    if(a==0){
    fact = 1;
    }
    else{
    fact = (a*factorial(a-1));//Calling the factorial function(Recursion).
    }
    return fact;
}
mainFunction();//calling main function.