const http = require('http');
const url = require('url');

const getQueryString=urlstring=>{
    try{
        return url.parse(urlstring, true).query;
    }
    catch(e){
        console.error(e);
 return{};
    }
};
module.exports=getQueryString;