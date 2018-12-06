
     runCalculator = function(){
        var num = parseInt(prompt("Enter the operation:\n1.Add\n2.Substract\n3.Multiply\n4.Divide\n5.Exponent\n6.Mean\n7.Quit."));
            switch(num) {
            case 1:
            var a = parseInt(prompt("Enter first number: "));
            var b = parseInt(prompt("Enter second number: "));
                var c= a+b;
            document.getElementById("result").innerHTML = c;
            break;
            case 2:
            var a= parseInt(prompt("Enter first number: "));
            var b = parseInt(prompt("Enter second number: "));
                var c= b-a;
            document.getElementById("result").innerHTML = c;
            break;
            case 3:
            var a = parseInt(prompt("Enter first number: "));
            var b = parseInt(prompt("Enter second number: "));
                var c= a*b;
            document.getElementById("result").innerHTML = c;
            break;
            case 4:
            var a = parseInt(prompt("Enter first number: "));
            var b = parseInt(prompt("Enter second number: "));
                var c= b/a;
            document.getElementById("result").innerHTML = c;
            break;
            case 5:
            var base = parseInt(prompt("Enter base value: "));
            var exponent = parseInt(prompt("Enter exponent value: "));
                var c= Math.pow(base,exponent);
            document.getElementById("result").innerHTML = c;
            break;
            case 6:
            var no = window.prompt("Enter the series of numbers:");
            var string = '***';
            c=1,sum =0;
            while(!no.includes(string)){
                {
                    sum+=parseInt(no,10);
                    c++;
                    no = (prompt("Enter series of numbers...."));
                }
            }
            mean = sum/c;
            document.getElementById("result").innerHTML = mean;
            break;
            case 7:
            window.close();
        }
}