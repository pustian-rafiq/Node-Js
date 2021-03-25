//event module
const EventEmitter = require('events');
const emitter = new EventEmitter();

class School extends EventEmitter {
   startPeriod(){
      
    console.log("Start period");
    //Raise an event
    setTimeout(()=>{
        this.emit("bellring",{   
            period: "second",
            text:"ended last 2"
        });
    }, 2000);
   }
}

module.exports = School;