const Router=require('express');
const {Tasks}=require('../Models/models');
const TaskRouter=Router();

TaskRouter.post('/',async (req,res)=>{
    console.log(req.body);
    const task= await new Tasks(req.body);
    task.save();
    res.send(task);
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

// update task
TaskRouter.patch('/:id',async (req,res)=>{
    const {id}=req.params;
    console.log(req.body,req.params);
    const task= await Tasks.findOneAndUpdate({_id:id},req.body);
    // return task which was before update
    res.send(task);
})
// Delete task
TaskRouter.delete('/:id',async (req,res)=>{
    const {id}=req.params;
    console.log(req.body,req.params);
    const task= await Tasks.findOneAndDelete({_id:id});
    // return task which was before update
    res.send(task);
})

module.exports=TaskRouter;