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
        //insertData(con);
        //updateData(con);
        //deletetData(con);
        selectData(con);
    }
});

// function insertData(con){
//     let sqlQuery =" INSERT INTO `student_tbl`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Rafiqul Islam','100','Nine','01991166550','Satkhira')";

//     con.query(sqlQuery, (error) =>{
//         if(error){
//             console.log("Data not inserted");
//         }else{
//             console.log("Data inserted successfully");
//         }
//     });
// }

// function updatetData(con){
//     let sqlQuery =" UPDATE `student_tbl` SET  roll`='101' WHERE 1";

//     con.query(sqlQuery, (error) =>{
//         if(error){
//             console.log("Data not inserted");
//         }else{
//             console.log("Data inserted successfully");
//         }
//     });
// }


// function deleteData(con){
//     let sqlQuery =" DELETE FROM `student_tbl` where id ='1'";

//     con.query(sqlQuery, (error) =>{
//         if(error){
//             console.log("Data not inserted");
//         }else{
//             console.log("Data inserted successfully");
//         }
//     });
// }


function selectData(con){
    let sqlQuery ="SELECT * FROM `student_tbl`";

    con.query(sqlQuery, (error, result) =>{
        if(error){
            console.log("Data not inserted");
        }else{
            console.log(result);
        }
    });
}