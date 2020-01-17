const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express();


app.use(express.json());

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(() => console.log("Mongodb connected"))
.catch(err => console.log(err));

    app.listen(process.env.PORT, () => {
        console.log(`App is running at localhost:${process.env.PORT}`);
    });