var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://rafiqulDemo:8gn4tSzqgViXZrZ@cluster0.vqwce.mongodb.net?retryWrites=true&w=majority";
var config = { useUnifiedTopology: true };
MongoClient.connect(URL, config, function(error){
    if(error){
        console.log("Database connection not successful");
    }else{
        console.log("Database connection successful");
    }
});