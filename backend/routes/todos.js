const express = require('express');
const {
    getTodos,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo
} = require('../controllers/routeControls');

const router = express.Router();

router.get('/', getTodos);

router.get('/:id', getTodo);

router.post('/', createTodo);

router.delete('/:id', deleteTodo);

router.patch('/:id', updateTodo);

module.exports = router;