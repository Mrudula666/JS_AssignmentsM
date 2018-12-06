function myfunction()
{
    document.getElementById("c_name").value = document.getElementById("name_1").innerHTML;
    document.getElementById("c_mail").value = document.getElementById("mail").innerHTML;
    document.getElementById("c_address").value = document.getElementById("address").innerHTML;
    document.getElementById("d").value = document.getElementsByName("order").innerHTML;
    document.getElementById("t_amt").value = document.getElementById("values").innerHTML;
    var toppings = function checkboxes()
    {
     var inputElems = document.getElementsByName("Toppings"),
      count = 0;

      for (var i=0; i<inputElems.length; i++) {       
         if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
            count++;
         }
      }
      return count;
   }
   var total = function total(){
       base_price = 10;
       delievery = 5;
       total_Price = (base_price+1.5*toppings+5)*1.0+document.getElementById("values").value;
       return total;
   }
   document.getElementById("total").innerHTML = total;
id="displaytable"
   
}