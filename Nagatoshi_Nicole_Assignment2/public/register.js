function required ()
{
    var empt = docuemnt.Register.fullname.username.password.confirm.email;
    if (empt === "")
    {
        alert ("please input a value")
        return false;
    }
    else 
    {
        onsubmit = "window.location='./invoice.html' + document.location.search;"
        return true 
    }
}
 //https://codepen.io/diegoleme/pen/surIK
var password = document.getElementById("password")
  , confirm = document.getElementById("confirm");

function validatePassword(){
  if(password.value != confirm.value) {
    confirm.setCustomValidity("Passwords Don't Match");
  } else {
    window.location = `./invoice.html${document.location.search}`;
    window.stop;
  }
}

password.onchange = validatePassword;
confirm.onkeyup = validatePassword;