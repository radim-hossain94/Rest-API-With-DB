const Todo = require("../models/Todo")

const getAllTodos = async (req, res, next) =>{
    try{
        const todos = await Todo.getTodos();
        res.json({
            success: true,
            data: todos
        });
    }catch(err){
        next(err);
        console.log(err.message);
    }
}

const createTodos = async (req, res, next) =>{
    try{
        const todos = new Todo({
            title: req.body.title,
            description: req.body.description
        });

        const savedTodo = await todos.save();
        res.json({
            success: true,
            data: savedTodo
        });
    }catch(err){
        next(err);
    }
}

const getSingleTodo = async (req, res, next) =>{
    const todo = await Todo.findById(req.params.id);
    try{
        if(!todo){
            return res.status(404).json({
                success: false,
                error: "Not found"
            })
        }
        res.json({
            success: true,
            data: todo
        })
    }catch(err){
        next(err);
        console.log(err.message);
    }
    
}

const updateTodo = async (req, res, next) =>{
    const todo = await Todo.findById(req.params.id);
    try{
        if(!todo){
            return res.status(404).json({
                success: false,
                error: "Not found"
            })
        }
        todo.title = req.body.title;
        todo.description = req.body.description;
        const updatedTodos = await todo.save();
        res.json({
            success: true,
            data: updatedTodos
        })
    }catch(err){
        next(err);
        console.log(err.message);
    }
    
}

const deleteTodo = async (req, res, next) =>{
    const todo = await Todo.findByIdAndDelete(req.params.id);
    
    try{
        if(!todo){
            return res.status(404).json({
                success: false,
                error: "Not found"
            })
        }
        res.json({
            success: true,
            data: "Todo has deleted "+todo.title
        })
    }catch(err){
        next(err);
        console.log(err.message);
    }
    
}

const completedTodo = async (req, res, next) =>{
    const todo = await Todo.findById(req.params.id);
    try{
        if(!todo){
            return res.status(404).json({
                success: false,
                error: "Not found"
            })
        }
        
        todo.completed = true;
        const completeTodoSaved = await todo.save();
        res.json({
            success: true,
            data: todo.title +" Task has beem completed"
        })
    }catch(err){
        next(err);
        console.log(err.message);
    }
}

const getCompletedTodos = async (req, res, next) =>{
    try{
        const getCompletedTodos = await Todo.find({
            completed: true
        });
        res.json({
            success: true,
            data: getCompletedTodos
        });
    }catch(err){
        next(err);
        console.log(err.message);
    }
}

module.exports = {
    getAllTodos, 
    createTodos, 
    getSingleTodo, 
    updateTodo, 
    deleteTodo, 
    completedTodo, 
    getCompletedTodos
}