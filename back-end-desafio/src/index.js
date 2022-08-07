const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
const router = express.Router();

app.use(cors());

const db = require('../src/db/models');

const userRouter = require('./routers/user');
const tasksRouter = require('./routers/tasks');

app.use(userRouter)
app.use(tasksRouter)

//Se não tiver um usuário admin padrão ele é instanciado
async function createDefaultUser(){

    const user = await db.user.findOne({
        attributes:['id','administrator'],
        where: {
        administrator: 1,
    }
})

if(!user){
    await db.user.create({
        email: "admin@admin.com", 
        password: 123456, 
        administrator: 1, 
    })
}

}

createDefaultUser()

const port = 3030
const host = "127.0.0.1"

app.listen(port, host, function () {
    console.log(`app listening on host ${host} and port ${port}`)
})