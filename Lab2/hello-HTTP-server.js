var http = require('http');
 
//create a server object:
http.createServer(function (req, res) {
  console.log(req.headers); //output the request headers to the console
  res.write('<html><b>Hello World!</b></html>'); //write a response to the client
  res.end(); //end the response
}).listen(8081); //the server object listens on port 8081

console.log('Hello world HTTP server listening on localhost port 8081');