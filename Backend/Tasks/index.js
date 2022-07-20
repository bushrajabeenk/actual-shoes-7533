const { urlencoded } = require('express');
const express=require('express');
const TaskRouter=require('./Routes/task.route');
const templateRouter=require('./Routes/templates');
const {connection}=require('./db');

const app=express();
app.use(urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('server');
})

app.use('/tasks',TaskRouter);
app.use('/templatetasks',templateRouter);

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