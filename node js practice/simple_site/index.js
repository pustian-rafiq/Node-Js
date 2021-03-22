var http = require('http');
var URL = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res){
    if(req.url=="/"){
        let data = fs.readFileSync('Home.html','utf8');
        res.end(data);
    }else if(req.url=="/about"){
        let data = fs.readFileSync('About.html','utf8');
        res.end(data);
    }else if(req.url=="/contact"){
        let data = fs.readFileSync('Contact.html','utf8');
        res.end(data);
    }else if(req.url=="/terms"){
        let data = fs.readFileSync('Terms.html','utf8');
        res.end(data);
    }
      
});


server.listen(4040);
console.log("server run success");