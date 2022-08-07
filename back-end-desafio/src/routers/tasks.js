const express = require("express");

const router = new express.Router();

const db = require("../db/models");

const Usuario = require("../db/controllers/user")(db);
const Tasks = require("../db/controllers/tasks")(db);

const auth = require("../db/middleware/auth")(db);

//GET TASKS 

router.get('/task', auth, async (req,res) =>{
    try{
        const myTasks = await Tasks.getMyTasks(req);
        if(!myTasks || myTasks == null || myTasks[0] == undefined){
            //Sem tasks para determinado usuário
            res.status(401).send([]);
            return;
        }
        res.send({myTasks});      
    }

    catch(error){
        console.log(error)
        res.status(400).send();
    }
})

//CREATE TASK

router.post('/task', auth, async (req,res) =>{
    try{
        const task = await Tasks.createTask(req);
        if(!task || task == null){
            res.status(401).send('Não foi possível criar a task');
            return;
        }
        res.send({task});      
    }

    catch(error){
        console.log(error)
        res.status(400).send();
    }
})

//UPDATE TASK

router.put('/task', auth , async (req,res) =>{
    try{
        const task = await Tasks.updateTask(req);
        
        res.send({task});      
    }

    catch(error){
        console.log(error)
        res.status(400).send(error.message);
    }
})

//CONCLUDE TASK

router.put('/task/conclude', auth, async (req,res) =>{
    try{
        const task = await Tasks.concludeTask(req);
        if(!task || task == null){
            res.status(401).send('Não foi possível atualizar a task a task');
            return;
        }

        res.send({task});      
    }

    catch(error){
        console.log(error)
        res.status(400).send();
    }
})

module.exports = router