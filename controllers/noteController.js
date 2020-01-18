const Note = require('../model/note');

function post(req,res){
    new Note({
        noteTitle: req.body.noteTitle,
        noteBody:req.body.noteBody

    }).save(function(err,doc){
        if(err){
            res.json(err);
        }
        else res.send('sucess');
    }); 

}

module.exports={
    post
}