const {Router} = require("express")
const userRoute= Router()
const user= require("../models/user")

userRoute.post("/signup",(req,res)=>{
    const User= new user(req.body)
    User.save((err,success)=>{
        if(err){
            return res.status(500).send({message:"Error occured"})
        }
        return res.status(201).send({message:"signup successful", User:success._doc})
    })
})

userRoute.post("/login",async(req,res)=>{
    const {username, password} = req.body;
    const validUser= await user.find({username,password})
    if(validUser.length < 1){
        return res.status(401).send({message:"Invalid Credentials"})
    }
    return res.send(validUser)
})

module.exports= userRoute