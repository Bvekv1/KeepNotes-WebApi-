const express = require('express');
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function register(req, res ,next){
    let password = req.body.password;
    bcrypt.hash(password, 12, function(err, hash){
        if(err){
            let err = new Error ('hash failed');
            err.status = 500;
            return next(err);
        }
    
    
      User.create({
          fullName: req.body.fullName,
          email:req.body.email,
          password: hash

      }).then((user)=>{
          let token = jwt.sign({_id: user._id}, process.env.SECRET);
          res.json({status: "Signup success!", token: token});
            }).catch(next);
});
}

module.exports ={
    register
}