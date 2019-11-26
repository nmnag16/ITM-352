fs=require('fs');
//must require filesync (fs)

var filename = 'user_data.json';
//where the data will be pulled from

fs.readFileSync(filename, 'utf-8'); 
// readFileSync(path)[,options] because we are in the file no path 
//when we call it, it will return with the context of the file if it was able to find it 
// it is insyconous (once called a funtion it will fire off and come back on its own) it will read the file but it wants the funtion to be done compleltu before it has a retuen and exitcute so if you do it asyncosmously it might not have the file context but it also a blocking funtion and wait till it comes back to make sure it comes back  
// we will get something  back from this 
//when we get that back we want to use JSON.parse() 
//convert the json data into something we can use 

users_reg_data = JSON.parse(data); 
//parse, if it is proper json data it will convert into an array or objuect 

console.log(users_reg_data);
//when console log gets an object it converts it to a json  string 
//if you want to check it got an object and not a string then you can out  typeof infont of user regidtration data or ['one of the objects'] and .password or whatever other identifiers  we have 
// ie : consolelog.log(users_reg_data['itm352].password);