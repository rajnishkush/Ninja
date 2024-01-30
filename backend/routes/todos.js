const express = require('express');
const Todo = require('../models/todoModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello from todos'
    });
});

router.get('/:id', (req, res) => {
    res.json({
        message: 'one todo'
    });
});

router.post('/', async (req, res) => {
    const {title, reps} = req.body;
    try{
        const todo = await Todo.create({title, reps});
        res.status(200).json({todo});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

router.delete('/:id', (req, res) => {
    res.json({
        message: 'delete the todo'
    });
});

router.patch('/:id', (req, res) => {
    res.json({
        message: 'update a todo'
    });
});

module.exports = router;