const mongoose=require('mongoose');

const connection=mongoose.connect('mongodb+srv://yashdata15:incorrectPassword@cluster0.xitrb.mongodb.net/Tasks?retryWrites=true&w=majority');



module.exports={connection};