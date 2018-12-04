highest=function(){
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    c = parseInt(document.getElementById("c").value);
    max = 0;
    if(a>=b && a>=c)
    max = a;
    else if(b>=c)
    max= b;
    else
    max = c;
    document.getElementById("max").value=max;
}