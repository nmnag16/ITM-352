function required ()
{
    var empt = docuemnt.Register.fullname.username.password.confirm.email;
    if (empt === "")
    {
        alert ("please input a value")
        return false;
    }
}

function checkpassword()
{
  if (password != confirm)
    {
        onsubmit = "window.location='./register' + document.location.search";
        return false;
    }
    else (password == confirm)
    {
      onsubmit = "window.location='./invoice.html' + document.location.search";
      return true;
    }
}

{
  
}
 //https://codepen.io/diegoleme/pen/surIK
//var password = document.getElementById("password")
  //, confirm = document.getElementById("confirm");

//function validatePassword(){
  //if(password.value != confirm.value) {
    //confirm.setCustomValidity("Passwords Don't Match");
  //} else {
    //window.location = `./invoice.html${document.location.search}`;
   // window.stop;
 // }
//}

//password.onchange = validatePassword;
//confirm.onkeyup = validatePassword;

//confirm password
//https://www.geeksforgeeks.org/password-matching-using-javascript/
//function validatePassword(form) {
    //password = form.password.value;
    //confirm = form.password.value;

   // if (password != confirm){
     //   alert ('Passwords do not match');
     //   return false;
 //   }

  //  else {
     //   window.location = `./invoice.html${document.location.search}`;
    //    window.stop;
    //    return true;
 //   }
//}