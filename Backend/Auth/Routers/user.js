const {Router} = require("express")
const userRoute= Router()
const User= require("../Models/model");

userRoute.post("/signup",async (req,res)=>{
    const user= await new User(req.body)
    user.save((err,success)=>{
        if(err){
            return res.status(500).send({message:"Error occured"})
        }
        return res.status(201).send({message:"signup successful", User:success._doc})
    })
})

userRoute.post("/login",async(req,res)=>{
    const {email, password} = req.body;
    const validUser= await User.find({email,password})
    if(validUser.length < 1){
        return res.status(401).send({message:"Invalid Credentials"})
    }
    return res.send(validUser)
})

module.exports= userRoute