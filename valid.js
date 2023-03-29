function customfunc(){

var x =document.getElementById("pass");

if(x.type === "password"){
    x.type = "text"
}
else{
    x.type = "password"
}

}

function validate(){
var p = document.getElementById("pass");
var lenght = document.getElementById("length");


if(p.value.length <8){
    alert("Password must be atleast 8 characters long");
    false;
}
else{
    window.location.replace("page1.html");
}

}