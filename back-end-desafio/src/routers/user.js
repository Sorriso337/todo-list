const express = require("express");

const router = new express.Router();

const db = require("../db/models");

const Usuario = require("../db/controllers/user")(db);

router.post('/user/login', async (req,res) =>{
    try{
        const usuario = await Usuario.logar(req.body);
        if(!usuario || usuario == null){
            res.status(401).send('Não foi possível fazer o login');
            return;
        }
        // const token = await Usuario.generateAuthToken();
        res.send({ usuario });      
    }

    catch(error){
        console.log(error)
        res.status(403).send(error.message);
    }
    
})

router.post('/user', async (req,res) =>{
    try{
        if(req.body.email == "" || req.body.password == "") res.status(400).send('email or password invalid')
        
        const usuario = await Usuario.createUser(req.body);
        
        res.send({usuario});      
    }
    catch(error){
        res.status(400).send('Email already exists');
    }
    
})

module.exports = router;