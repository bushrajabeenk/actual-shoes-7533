const express=require("express")
const userRoute = require("./routes/user")
const connections= require("./storage/db")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/user", userRoute)

app.listen(8080,async ()=>{
    await connections
   console.log("server started")
})