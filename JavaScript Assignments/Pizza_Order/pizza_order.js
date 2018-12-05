function submit_m(){
    var name_1= document.getElementById("name_1").value;
    var mail = document.getElementById("mail").value;
    document.getElementById("sub_s").disabled = false;
}
function myfunction()
{
    var value=document.getElementById("displaytable").value;
    if(value!=null)
    {
        value.css.style.display=block;
    }
}