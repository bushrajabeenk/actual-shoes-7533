const mongoose=require('mongoose');

// Task schema
const TaskSchema=mongoose.Schema({
    title:{type:String,required:true}, 
    file:{data:Buffer,contentType:String}, 
    date:String,
    description:String,
    comments:Object,
    status:{type:String,default:'active'}
})

const Tasks=mongoose.model('task',TaskSchema);

// Template task schema
const TemplateTaskSchema=mongoose.Schema({
    name:{type:String,required:true},
    tasks:Object
})

const Templates=mongoose.model('Template',TemplateTaskSchema);

module.exports={Tasks,Templates};