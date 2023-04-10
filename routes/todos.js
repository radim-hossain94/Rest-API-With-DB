const express = require('express');
const router = express.Router();
const todosController = require ('../controllers/todoController');

router.get('/', todosController.getAllTodos);
router.get('/:id', todosController.getSingleTodo);
router.post('/', todosController.createTodos);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);
router.put('/complete/:id', todosController.completedTodo);
router.get('/completedTodos', todosController.getCompletedTodos);

module.exports = router;