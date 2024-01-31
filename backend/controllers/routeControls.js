const Todo = require('../models/todoModel');
const mongoose = require('mongoose');

// get all todos
const getTodos = async (req, res) => {
    try {
        const todo = await Todo.find({}).sort({ createdAt: -1 });
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get a single todo
const getTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No todo with that id');
    }
    const todo = await Todo.findById(id);
    if (!todo) {
        return res.status(404).json({ error: "No such todo" });
    }
    res.status(200).json(todo);
};

// create a todo
const createTodo = async (req, res) => {
    const { title, reps } = req.body;
    try {
        const todo = await Todo.create({ title, reps });
        res.status(200).json(todo);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// delete a todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No todo with that id');
    }
    const todo = await Todo.findByIdAndDelete({ _id: id });
    if (!todo) {
        return res.status(404).json({ error: "No such todo" });
    }
    res.status(200).json(todo);
};

// update a todo'
const updateTodo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No todo with that id');
    }
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    if (!todo) {
        return res.status(404).json({ error: "No such todo" });
    }
    res.status(200).json(todo);
};

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo
};
