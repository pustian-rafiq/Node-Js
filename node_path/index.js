const fs = require('fs');
 
// file module
// fs.readFile("demo.txt", (error,result)=>{
//     console.log(result.toString());
// });
 //import school class
const School = require('./school');
const school = new School();

 
//register a listener for bellring event---passing parameter
school.on("bellring", ({period,text})=>{
    console.log(`We need to run because ${period} ${text}`);
});
 school.startPeriod();
