var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb://127.0.0.1:27017/";
var config = { useUnifiedTopology: true };
MongoClient.connect(URL, config, function(error, MyMongoCLient){
    if(error){
        console.log("Database connection not successful");
    }else{
        console.log("Database connection successful");
        insertData(MyMongoCLient);
        //deleteOneData(MyMongoCLient)
        //deleteAllData(MyMongoCLient)
        //findOneWithoutCondition(MyMongoCLient)
        //findAllData(MyMongoCLient)
        //findAllDataByProjection(MyMongoCLient)
        //findAllDataByQuery(MyMongoCLient)
        //findAllDataByLimit(MyMongoCLient)
        //findAllDataByLimit(MyMongoCLient)
        //updateOneData(MyMongoCLient)
        //createNewCollection(MyMongoCLient)
        //deleteCollection(MyMongoCLient)
    }
});


function insertData(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');

    var mycollection = myDatabase.collection('students');
    var myData ={Name:"Ruhan Islam",Roll:"102",Class:"Ten",City:"Satkhira"};

    mycollection.insertOne(myData,function(error){
        if(error){
            console.log("Data not Inserted");
        }else{
            console.log("Data inserted successful");
         
        }
    });
}
//Delete one Item from database-- cd node_mongodb   npm start

function deleteOneData(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');

    var mycollection = myDatabase.collection('students');
    var deleteData ={ Roll:"103"};

    mycollection.deleteOne(deleteData,function(error){
        if(error){
            console.log("Data not Deleted");
        }else{
            console.log("Data Deleted successful");
         
        }
    });
}

//Delete Many Item from database-- cd node_mongodb   npm start

function deleteAllData(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');

    var mycollection = myDatabase.collection('students');
    

    mycollection.deleteMany(function(error,resultObj){//callback function always  2 ta parameter nia,,ekta error r onnota result
        if(error){
            console.log("Data not Deleted");
        }else{
            console.log(resultObj.result.n + "Data Deleted successful");
         
        }
    });
}

//Find one Item from database-- cd node_mongodb   npm start

function findOneWithoutCondition(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');

    var mycollection = myDatabase.collection('students');
    var findData ={};

    mycollection.findOne(findData,function(error,result){
        if(error){
            console.log("Data not found");
        }else{
            console.log(result);
         
        }
    });
}
//Find All Item from database-- cd node_mongodb   npm start

function findAllData(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');

    var mycollection = myDatabase.collection('students');
   

    mycollection.find().toArray(function(error,result){
        if(error){
            console.log("Data not found");
        }else{
            console.log(result);
         
        }
    });
}

//Find All Item from database-- cd node_mongodb   npm start

function findAllDataByProjection(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');

    var mycollection = myDatabase.collection('students');
    var dataObj = {}
    var itemProjection = { projection:{Roll:1,City:1 } } //projection er vitor j field gulo dekhabo tader value 1 dbo r na dekhate caile 0 dbo

    mycollection.find(dataObj,itemProjection).toArray(function(error,result){
        if(error){
            console.log("Data not found");
        }else{
            console.log(result);
         
        }
    });
}

//Find multiple Item from database using condition-- cd node_mongodb   npm start

function findAllDataByQuery(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');

    var mycollection = myDatabase.collection('students');
    var queryCondition = {Roll:"103", City:"Dhaka"}
     

    mycollection.find(queryCondition).toArray(function(error,result){
        if(error){
            console.log("Data not found");
        }else{
            console.log(result);
         
        }
    });
}

//Find multiple Item from database using limit-- cd node_mongodb   npm start

function findAllDataByLimit(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');

    var mycollection = myDatabase.collection('students');
  
    mycollection.find().limit(2).toArray(function(error,result){
        if(error){
            console.log("Data not found");
        }else{
            console.log(result);
         
        }
    });
}
//Find all Item from database using sorting-- cd node_mongodb   npm start

function findAllDataByLimit(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');

    var mycollection = myDatabase.collection('students');
   var sortIten = { Roll: 1}//1 for ascending order and -1 for descending order
    mycollection.find().sort(sortIten).toArray(function(error,result){
        if(error){
            console.log("Data not found");
        }else{
            console.log(result);
         
        }
    });
}
//Update One Item from database using updateOne()-- cd node_mongodb   npm start

function updateOneData(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');
    var mycollection = myDatabase.collection('students');

    var updatedData = { Roll: "102"} 
    var updateNewValue = {$set:{Name:"Rafiqul Islam", City:"Pabna"}}
    mycollection.updateOne(updatedData,updateNewValue,function(error,result){
        if(error){
            console.log("Data not found");
        }else{
            console.log(result);
         
        }
    });
}
//Create new collection in database

function createNewCollection(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');
    myDatabase.createCollection("teachers",function(error,result){
        console.log(result);
    });
}

//Delete any collection from database

function deleteCollection(MyMongoCLient){
    var myDatabase = MyMongoCLient.db('school');
    myDatabase.dropCollection("teachers",function(error,result){
        console.log(result);//return true or false
    });
}