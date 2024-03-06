
// menu open-close

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


// ligt-dark mode

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}


// contact

function validation() {
    var name= document.getElementById("name").value;
    var validname=/^[A-Za-z]+$/;
    var email= document.getElementById("email").value;
    var validemail=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-za-z]{2,4})$/;
    var project= document.getElementById("project").value;
  


if(name==""){
    alert("Please enter your Full Name");
    return false;

}

else if((name.length<=3) || (name.length>15)){
    alert("Name lenth must be between 2 & 15");
    return false;

}

else if(validname.test(name)==false){
    alert("Only characters are allowed");
    return false;

}



else if(email==""){
    alert("Please Enter your Email Id");
    return false;
}

else if(validemail.test(email)==false)
{
  alert("Please Enter valid email id");
  return false;
}




else if(project==""){
    alert("Please enter Project Detail");
    return false;
}
else if(project.length<=30){
    alert("Please Enter Project Detail Minimum 30 Letters");
    return false;
}


else{

  document.write( "<h1 style='color:green; text-align:center; margin-top:250px ;  font-family: Arial, Helvetica, sans-serif; '>" + "Thank you" +" " + name +  "<br></br>"+"Your registration is sucessfull" + "</h1>" );


    return true;
}

};

