const express = require('express');
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

router.post('/', (req, res) => {
    res.json({
        message: 'create todo'
    });
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