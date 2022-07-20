const Router=require("express");

const templateRouter=Router();
const {Templates}=require('../db');

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