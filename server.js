require("dotenv").config();
const express = require ("express");
const morgan = require ("morgan");
const methodOverride = require ("method-override");
const fruitController = require("./controllers/fruit");
const path = require("path");



//app express 

const app = express();
app.engine("jsx" , require("express-react-views").createEngine());
app.set("view engine","jsx");


//middleware

app.use(morgan("tiny")); // logging 
app.use(methodOverride("_method")); 
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

//Routes


app.use("/fruits" , fruitController)
app.get ("/",(req,res) =>{
    res.send("your server is runing ..... you better catch it ");
})









//server listner 
const PORT = process.env.PORT;
app.listen(PORT , ()=> {
    console.log(`now listening on port ${PORT}`) ;
})