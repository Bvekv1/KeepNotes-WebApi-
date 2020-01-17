const mongoose = require('mongoose');
mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(() => console.log("Mongodb connected"))
.catch(err => console.log(err));