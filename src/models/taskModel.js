const {Schema, model} = require('mongoose')


const taskSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    status: { 
        type: String, 
        enum: ['pending', 'in-progress', 'completed'], 
        default: 'pending' 
    },
    
}, {timestamps : true})


const Task = model('task', taskSchema)
module.exports = Task