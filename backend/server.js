require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const todosRoute = require('./routes/todos');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/api/todos', todosRoute);

const port = process.env.PORT || 3300;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    })
    .catch(err => {
        console.log(err);
    });