const http = require('http');
const url = require('url');

const getQueryString=urlstring=>{
    try{
        return url.parse(urlstring).query;
    }
    catch(e){
 return{};
    }
};
http.createServer( (req, res) =>{
     // res.write('Hello World!'); //write a response to the client
   //res.writeHead(200, {'Content-Type': 'text/html'});// mime type
    const queryObject=getQueryString(req.url);
    res.writeHead(200, {'Content-Type':'application/Json'});
    //res.write(JSON.stringify({status:"sucess"})); //passing content type as Json
    res.write(JSON.stringify(queryObject));
    res.end(); //end the response
  }).listen(8000); //the server object listens on port 8080
  