var  mysql = require('mysql');

var DatabaseConnectionConfig = {
    host : "localhost",
    user: "root",
    password: "",
    database: "node_school"
}

var con = mysql.createConnection(DatabaseConnectionConfig);
con.connect(function(error){
    if(error){
        console.log("Database Connection Failed");
    }
    else {
        console.log("Database Connection Success");
        insertData(con);
    }
});

function insertData(con){
    let sqlQuery =" INSERT INTO `student_tbl`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Rafiqul Islam','100','Nine','01991166550','Satkhira')";

    con.query(sqlQuery, (error) =>{
        if(error){
            console.log("Data not inserted");
        }else{
            console.log("Data inserted successfully");
        }
    });
}