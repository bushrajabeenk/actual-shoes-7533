const { urlencoded } = require('express');
const express=require('express');
const TaskRouter=require('./Tasks/Routes/task.route');
const templateRouter=require('./Tasks/Routes/templates');
const userRouterers = require('./Auth/Routers/person');
const userRoute = require("./Auth/Routers/user");

const {connection}=require('./db');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('server');
})

// Task routes/middlewares
app.use('/tasks',TaskRouter);
app.use('/templatetasks',templateRouter);

// Auth routes
// app.use('/signup',Userauth);
// app.use('/login',Userauth);

app.use("/user", userRoute)
app.use("/profile",userRouterers)

const port=8080;
app.listen(port,async ()=>{
    await connection;
try{
    console.log('server started at port 8080 and Database connected');
}
catch(err){
    console.log('error ocuured :',err);
}
})