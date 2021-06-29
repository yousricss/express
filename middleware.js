const h = new Date();
const hour = h.getHours();
const day = h.getDay();

const workingTime = (req,res,next) =>{
    if(hour < 9 || hour > 17|| day < 1 || day > 5){
        console.log(" sorry can't serve your request at this time, try in working hours")
        res.send(' <h1>Sorry try in working hours </h1> ')
    }
    else{
        console.log("page have been send to the client")
        next();
    }
    }


module.exports = workingTime;