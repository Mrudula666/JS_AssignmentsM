HighestOfThreeNumbers = function(){
    var first_number = 4;
    var second_number = 6;
    var third_number = 7;
    a = first_number;
    b = second_number;
    c = third_number;
    max = 0;//initialising another element
    if(a>=b && a>=c)
    max = a;
    else if(b>=c)
    max= b;
    else
    max = c;
    console.log(max);
}
HighestOfThreeNumbers();//calling the function