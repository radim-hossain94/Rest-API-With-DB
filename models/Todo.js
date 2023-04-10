const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false,
    },
    creationAt:{
        type: Date,
        default: Date.now,
    },
})

todoSchema.statics.getTodos = function () {
    return this.find();
}


module.exports = mongoose.model('Todo', todoSchema)