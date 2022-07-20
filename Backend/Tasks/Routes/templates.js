const Router=require("express");

const templateRouter=Router();
const {Templates}=require('../Models/models');

templateRouter.post('/',async (req,res)=>{
      const template=await new Templates(req.body);
      template.save();
      res.send(template);
})

templateRouter.get('/',async (req,res)=>{
    let template= await Templates.find();
    console.log(template);
    res.send(template);
})

// update template

templateRouter.patch('/:id',async (req,res)=>{
    const{id}=req.params;
    console.log(req.params,req.body);
    if(id){
        let template= await Templates.findOneAndUpdate({_id:id},req.body)
        // it's return the data which was before update.
        return res.send(template);
    }
    return res.status(400).send('bad request');
})
// Delete template
templateRouter.delete('/:id',async (req,res)=>{
    const{id}=req.params;
    console.log(req.params,req.body);
    if(id){
        let template= await Templates.findOneAndDelete({_id:id})
        return res.send(template);
    }
    return res.status(400).send('bad request');
})

//  Delete template task.
// -> 1.select the todo array 
// -> 2. filter the array (remove the todo task from array  through task id)
// -> 3. apply path filter to update the tasks -> give that filtered array to as updated tasks
//  NOTE: Every task should have it's custom unique id for identify the task.

// Template task data for a particular id --> it's optional to use because you can do same from frontend
// through searching in array in which you are  stored all templates data. 

templateRouter.get('/:id',async (req,res)=>{
    const{id}=req.params;
    if(id){
        let template= await Templates.find({_id:id});
        return res.send(template);
    }
    return res.status(400).send('bad request');
})


module.exports=templateRouter;