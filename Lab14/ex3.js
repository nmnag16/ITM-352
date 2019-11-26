var fs=require('fs');

var express = require('express');
var app = express();
var myParser = require("body-parser");
//server stuff


var filename = 'user_data.json';

if(fs.existsSync(filename) ) {
stats = fs.statSync(filename);

console.log(filename +  'has' + stats.size +  'charaters');

data = fs.readFileSync(filename, 'utf-8'); 

users_reg_data = JSON.parse(data); 

console.log(users_reg_data.itm352.password);
} else {
    console.log(filename + 'does not exist!')
}

app.use(myParser.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    // if ther server  gets a  GET request  then it  will give a login form
    //do this  in Assigment 2 to redirect into a login page in a static file
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    //if server gets a POST request then it will get called with the data from the form

// adapt it to post the login and the body parser will  get the information
console.log(request.body);
//this will show  the  user info  array 
// a dignostic 

the_username = request.body.username;
//give me the username from the object

if(typeof users_reg_data [the_username] !='undefined')
// check if  the username and password exists 
{
    if(users_reg_data[the_username].password == request.body.password)
//if does exist and if the password matches 
response.send(the_username + 'logged in!');
}

else{
    response.redirect('/login');
    // if not found will turn them back into the log in and clear the data
}

});

app.listen(8080, () => console.log(`listening on port 8080`));
