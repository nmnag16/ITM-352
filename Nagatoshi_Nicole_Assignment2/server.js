//server acts as a middle man
const querystring = require('querystring');

var fs = require ('fs');
var express = require('express');
var myParser = require("body-parser");
var products = require("./public/product_data.js");
var app = express();
var qstr ={};
var qs = requir('querystring');
var quant =  {};
const querystring = require('querystring')
const product_data = require('./public/product_data');

var app = express();


app.use(myParser.urlencoded({ extended: true }));
//intercept purchase submission form, if good give an invoice, otherwise send back to order page
app.get("./invoice", function (request, response) {
   //check if quantity data is valid
   //look up request.query
   quant = request.query;
   params = request.query;
   console.log(params);
   if (typeof params['purchase_submit'] != 'undefined') {
      has_errors = false; // assume quantities are valid from the start
      total_qty = 0; // need to check if something was selected so we will look if the total > 0
      for (i = 0; i < products.length; i++) {
         if (typeof params[`quantity${i}`] != 'undefined') {
            a_qty = params[`quantity${i}`];
            total_qty += a_qty;
            if (!isNonNegInt(a_qty)) {
               has_errors = true; // oops, invalid quantity
            }
         }
      }
      qstr = querystring.stringify(request.query);
      // Now respond to errors or redirect to invoice if all is ok
      if (has_errors || total_qty == 0) {
         //if quantity data is not valid, send them back to product display
         qstr = querystring.stringify(request.query);
         response.redirect("index.html?" + qstr);
      } else { // all good to go!
         response.redirect("login.html?" + qstr);
      }
   }
});
//if quantity data valid, send them to the invoice



function isNonNegInt(q, returnErrors = false) {
   errors = []; // assume no errors at first
   if (q == "") { q = 0; }
   if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
   if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
   if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
   return returnErrors ? errors : (errors.length == 0);
}

fs = require('fs');

if (fs.existsSync(filename)) {
   satus = fs.statSync(filename)

   data = fs.readFileSync(filename , 'uft-8');
   users_reg_data =JSON.parse(data);
}

app.get("./login.html", function (request, response) {
   str = `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
   
       <link href="products-style.css" rel="stylesheet">
   
    <div class="container">
       <title>login
       </title>
   <script>
       let params = (new URL(document.location)).searchParams; 
       window.onload = function () { 
           if (params.has('LogError')) { 
               login['username'].value = params.get('username');
               login['password'].value = params.get('password');
               alert('Invalid Username or Password');
           }
       }
   </script>
   </head>
   <form name="login" method="POST">
       <H1>Login Page</H1> <br> <br>
      
               <label for="username"><b>Username</b></label>
               <input type="text" placeholder="Enter Username" name="username" onkeyup="" required><br>
               <label for="password"><b>Password</b></label>
               <input type="password" placeholder="Enter Password" name="password" onkeyup="" required><br>
       <br>
       <input type="submit" name="login" value="Login">
   </form>
   <script>
   login.action="./login.html" + document.location.search;
   </script>
   </div>
       <input type="button" name="newuser" value="New User" onclick="window.location='./register.html' + document.location.search;">
        
   </table>
   
   
   <!--reg form from codify academy<input id="Confirmpassword" placeholder="confirm password">
       <input id="Newemailaddress" placeholder="email address">
       -->
   `;
   response.send(str);
});

app.post ("./register.html", function (request, response){
   console.log(quant);
   the_username= request.body.username;
   username =request.body.username;
   errors = [];

   if (typeof users_reg_data[username]!= 'undefined'){
      error.push("Username already exists please put in a diffrent username");
   }
   console.log (error, users_reg_data);
   if (errors.length == 0) {
      users_reg_data[username] = {};
      users_reg_data[username].username = request.body.username;
      users_reg_data[username].password = request.body.password;
      users_reg_data[username].email = request.body.email
      users_reg_data[username].fullname = request.body.fullname;

      fs.writeFilesync(filename, JSON.stringify(users_reg_data));
      theQuantQuerystring = qs.stringify(quant);
         response.redirect("./invoice.html?" + theQuantQuerystring + `&username=${the_username}`);
   } else{
      response.redirect('./register.html?' + 'error=Please try again!');
   }
});

app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));