var http =  require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

     if(req.url == "/"){
         //Asychronous sysetm--node fsModule.js
        //  fs.readFile('Home.html',function(error,data){
        //     res.writeHead(200,{'Content-Type' : 'text/html'});
        //     res.write(data);
        //     res.end();
        //  });

          //Sychronous sysetm--node fsModule.js
        //   let synData = fs.readFileSync('Home.html')
        //     res.writeHead(200,{'Content-Type' : 'text/html'});
        //     res.write(synData);
        //     res.end();
        fs.writeFile('demp.txt',"Hello sunny", function(error){
            if(error){
                res.writeHead(200,{'Content-Type' : 'text/html'});
                res.write("File write fail");
                res.end();
            }else{
                res.writeHead(200,{'Content-Type' : 'text/html'});
                res.write("File write success");
                res.end();
            }
         
        });
     }
});

server.listen(5050);
console.log("server run Porcess");