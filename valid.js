
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-VA95L0WUKTBX-2");

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