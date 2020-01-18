const mongoose = require('mongoose');
//Register Schema

const noteSchema = new mongoose.Schema({
   noteTitle:{
       type: String,
       required:false
   } ,
   noteBody:{
       type: String,
       required: false
   }
})

module.exports = mongoose.model('Note', noteSchema);
