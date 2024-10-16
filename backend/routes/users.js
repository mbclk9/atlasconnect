const express = require('express');
const router = express.Router();
const User= require('../models/User');


//Tüm kullanıcıları getir
router.get('/', async (req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch (err){
        res.status(500).json({message:err.message});
    }
});


//Yeni kullanıcı ekle
router.post('/', async(req,res) => {
    const user = new User({
        name:req.body.name,
        email: req.body.email,
        age: req.body.age
    });

    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch (err){
        res.status(400).json({message:err.message});
    }

});

//Kullanıcı güncelle
router.put('/:id', async (req,res) => {
    try{
        const user =await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.json(user);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

//Kullanıcı sil
router.delete('/:id', async (req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({message:'Kullanıcı Silindi'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports= router;

