const express = require("express");
const Fruit= require ("../models/fruit");

// create router 


const router = express.Router();





router.get("/seed" ,(req,res)=>{

    const startFruits = [
        {name:"orange",
        color:"orange",
        readyToEat:false},
        {name:"grape",
        color:"purple",
        readyToEat:false},
        {name:"bannana",
        color:"green",
        readyToEat:false},
        {name:"strawberry",
        color:"red",
        readyToEat:false},
        {name:"coconut",
        color:"brown",
        readyToEat:false},
    ];

    Fruit.deleteMany({}).then((data)=>{ 
        Fruit.create(startFruits).then((data)=>{
            res.json(data);
        })
    }).catch((err)=>{
        res.status(400).send(err);
    })
    
    
})

// INDEX ROUTE 

router.get ("/" , (req,res)=>{
    Fruit.find({} ,(err,fruits)=>{
        res.render("fruits/Index",{fruits});
    });
});

// NEW
router.get("/new",(req,res)=>{
    res.render("fruits/New.jsx");
})


//DELETE
router.delete ("/:id",(req,res)=>{
    const {id} = req.params;
    Fruit.findByIdAndDelete (id)
    .then(()=>{
        res.redirect ("/fruits");

    })
    .catch((error)=>{
        res.status(400).send({error});
    })
})


//UPDATE
router.put("/:id" , (req,res)=>{
    const{id}=req.params;

    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;



    Fruit.findByIdAndUpdate (id,req.body , {new:true})
    .then ((updatedFruit) =>{
        res.redirect (`/fruits/${id}`);
    })
    .catch((error)=>{
        res.status(400).json({error});
    })
})

//CREATE
router.post("/",(req,res)=>{
   

    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    }else {
        req.body.readyToEat = false ;
    }

    Fruit.create(req.body) 
    .then((createdFruit)=>{
        res.redirect(`/fruits/${createdFruit._id}`)
    })
    .catch((error) =>{
        res.status(400).json({error}) ;
    })
})

//EDIT
router.get("/:id/edit" , (req,res)=>{
    const {id} = req.params;
    Fruit.findById(id)
    .then((fruit)=>{
        res.render("fruits/Edit", {fruit})
    })
    .catch((error)=>{
        res.status(400).json({error});
    })
})

//SHOW 
router.get ("/:id" ,(req,res) => { 
    const {id}  = req.params ;
    Fruit.findById(id)
    .then((foundFruit)=>{
         res.render("fruits/Show.jsx",{
             fruit:foundFruit
         })
    })
    .catch((error)=>{
        res.status(400).json({ error });

    })
})



module.exports = router;