const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

var morgan = require('morgan');

const userController = require('./controllers/userController');



const app = express();
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/registerUser',userController.register);


mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(() => console.log("Mongodb connected"))
.catch(err => console.log(err));

 app.listen(process.env.PORT, () => {
        console.log(`App is running at localhost:${process.env.PORT}`);
    });