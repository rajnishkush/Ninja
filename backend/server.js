require('dotenv').config();
const express = require('express');
const todosRoute = require('./routes/todos');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/todos', todosRoute);

const port = process.env.PORT || 3300;
app.listen(port, () => {
    console.log('Server running on port ' + port);
});