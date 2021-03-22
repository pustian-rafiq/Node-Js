var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://rafiqulDemo:8gn4tSzqgViXZrZ@cluster0.vqwce.mongodb.net?retryWrites=true&w=majority";
var config = { useUnifiedTopology: true };
MongoClient.connect(URL, config, function(error, MyMongoCLient){
    if(error){
        console.log("Database connection not successful");
    }else{
        console.log("Database connection successful");
        insertData(MyMongoCLient);
    }
});


function insertData(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');

    var mycollection = myDatabase.collection('students');
    var myData ={Name:"Rafiqul Islam",Roll:"101",Class:"Ten",City:"Dhaka"};

    mycollection.insertOne(myData,function(error){
        if(error){
            console.log("Data not Inserted");
        }else{
            console.log("Data inserted successful");
         
        }
    });
}