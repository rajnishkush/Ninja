const mongoose = require('mongoose');

const todoModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },  
},{timestamps: true});

module.exports = mongoose.model('Todo', todoModel);