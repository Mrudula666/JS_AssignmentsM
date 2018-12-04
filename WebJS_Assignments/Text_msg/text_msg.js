function msg(){
    x = "HELLO WORLD";
    //document.getElementById("msg").value = x;*/
    var button = document.getElementById('msg1');
    button.addEventListener('click',hideshow,false);

    function hideshow() {
        document.getElementById('msg').style.display = "block";
        document.getElementById('msg').value = "HELLO WORLD";
        this.style.display = 'none';
    };
    
};