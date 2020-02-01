const express = require("express");
const app = express();
app.get("/",(request,response)=>{
  response.send("hello");
});
app.get("/profile",(request,response)=>{
  response.send("profile page");
});
const server=app.listen('8080',()=>{
 // console.log("server running on port "+server.address().port+".");
  console.log(`server running on port:${server.address().port}.`);
  
});




//const http = require('http');
//const getQueryString=require("./getQueryString");


//http.createServer( (req, res) =>{
     
  // res.writeHead(200, {'Content-Type': 'text/html'});// mime type
   // const queryObject=getQueryString(req.url);
   // res.writeHead(200, {'Content-Type':'application/json'});
   // res.write(JSON.stringify(queryObject));
   // console.log("hello");
    
   // res.end(); //end the response
  //}).listen(8080); //the server object listens on port 8080
  