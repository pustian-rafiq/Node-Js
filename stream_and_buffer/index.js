// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/demo.txt`,'utf8');

// ourReadStream.on('data', (chunk)=>{
//     console.log(chunk);
// });

//cd stream_and_buffer
// node index.js

const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write('<html><head><title>Form Title</title></head>');
        res.write('<body><form action="/process" method="post"> <input name="message" /> </form></body>');
        res.end();
    }else if(req.url==='/process'){
        res.write("This sis process page");
        res.end();
    }else{
        res.write("Not found");
        res.end();
    }

});


server.listen(3030);
console.log("Server run success");