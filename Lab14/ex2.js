fs=require('fs');

var filename = 'user_data.json';

if(fs.existsSync(filename) ) 
//fs.existSync is file exist sync  
{
stats = fs.statSync(filename);

console.log(filename +  'has' + stats.size +  'charaters');

data = fs.readFileSync(filename, 'utf-8'); 

users_reg_data = JSON.parse(data); 

console.log(users_reg_data.itm352.password);
//check to  see  if file exist 
} else {
    console.log(filename + 'does not exist!')
//if not found then will write does  not exist 
}
