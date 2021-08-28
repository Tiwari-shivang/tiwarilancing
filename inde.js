 window.onload = function(){
   formval();
 }
 function formval(){
   document.getElementById("usernam").innerHTML = "none";
 }
 window.onscroll = function(){
   appear();
 }

 function appear(){
   var up = document.getElementById("scroll");
   if(document.body.scrollTop < 600 || document.documentElement.scrolltop < 600){
     up.style.display="none";
   }
   else {
     up.style.display="block";
   }
 }

 function work(){
   document.getElementById("getnow").scrollIntoView();
 }

 function about(){
   document.getElementById("me").scrollIntoView();
 }

function cont(){
   document.getElementById("c").scrollIntoView();
}
function notsub(){
  var a = document.forms["responsee"]["usernam"].value;
  var c = document.forms["responsee"]["subjectt"].value;
  if(a == ""||a == null){
    alert("Username cannot be empty");
  }

  else if(c == ""||c == null){
    alert("There should be some Subject in your mail");
  }
  else{
    window.alert("This form currently not accepting response kindly mail at 'shubh9910tiwari@gmail.com' Thankyou.");
  }
}
