const Router=require('express');
const {Tasks}=require('../db');
const TaskRouter=Router();

TaskRouter.post('/',async (req,res)=>{
    console.log(req.body);
    const task= await new Tasks(req.body);
    task.save();
    res.send('added succesfully');
})

TaskRouter.get('/',async (req,res)=>{
    const {status}=req.query;
    if(status){
        let  tasks=await Tasks.find({status:status});
        console.log(tasks);
        return res.send(tasks);
    }
    let tasks=await Tasks.find();
    res.status(200).send(tasks);
})
module.exports=TaskRouter;