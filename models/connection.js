require("dotenv").config();
const mongoose =require("mongoose");


// database connection 
//////////////


const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
        useNewUrlParser : true ,
        useUnifiedTopology:true
};


// establish 

mongoose.connect(DATABASE_URL,CONFIG);


mongoose.connection 
.on("open" , ()=> console.log ("we are in the building"))
.on("close",()=> console.log("mongo has left the building"))
.on("error",(error)=> console.log(error));


module.exports = mongoose;