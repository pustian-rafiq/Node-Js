var http = require('http');
 
var URL = require('url');

var server = http.createServer(function(req, res){
     var myUrl = "https://www.facebook.com/CSEanRafiq"
     var urlObj = URL.parse(myUrl, true);

     var hostName = urlObj.host;
     var pathName = urlObj.pathname;
     res.writeHead(200,{'content-type': 'text/html'});
     res.write(hostName);
     res.write(pathName);
     res.end();
});


server.listen(5050);
console.log("server run success");