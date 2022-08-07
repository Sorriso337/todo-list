const jwt = require('jsonwebtoken');
const { findLastIndex } = require('lodash');
const { Op } = require('sequelize');
module.exports = (db) => {

    const logar = async (body) => {
        try{

            if (!body.email || !body.password) {
                throw new Error('Favor preencher usuário e senha.')
            }
            const user = await db.user.findOne({
                attributes:['id','administrator'],
                where: {
                    email:body.email,
                    password:body.password
                }
            })
            
            if (!user) {
                throw new Error('Usuário e/ou senha incorretos.')
            }
            const token = await generateAuthToken(user)
            return {token};
        }
        catch(error){
            console.log(error)
            throw error
        }
    }

    const createUser = async (body) => {
        try{
            
            const newUser = await db.user.create({
                email: body.email, 
                password: body.password, 
                administrator: body.administrator || 0, 
            })

            return newUser
        }
        catch(error){
            console.log(error)
            throw error
        }
            
    }

    const generateAuthToken = async (user) => {
        
        const inserir = (obj) =>{
            user.token[user.token.length] = obj;
        }
        const remover = (item)=>{
            if(user.token.length > 0){
                user.token.pop();
                user.token.unshift(item);
            }
        }
        
        const item = jwt.sign({id:user.id, administrator:user.administrator},'key');
        if(user.token instanceof Object || user.token == '' || user.token == null){
            user.token = []
            user.token = JSON.stringify(user.token)
        }
        user.token = JSON.parse(user.token)
        
        if(user.token.length >= 3){
            remover(item);
        }
        else{
            inserir(item);
        }
        user.token = JSON.stringify(user.token)
        await user.save()

        return item;

    }

    return Object.create({
        logar,
        generateAuthToken,
        createUser,
    })
}