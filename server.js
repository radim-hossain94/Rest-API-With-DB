const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todos')
const connectDB = require('./config/connectDB');
const errorHandler = require('./middlewares/errorHandler');
const Todo = require('./models/Todo');

const app = express();
const PORT = process.env.PORT || 3000;

//app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

connectDB();

//TODO API
app.use('/api/v1/todos', todoRoutes);

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);``
})

