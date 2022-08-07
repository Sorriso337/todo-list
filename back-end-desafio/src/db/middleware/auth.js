const jwt = require('jsonwebtoken');
const {Op} = require('sequelize');


module.exports = (db) =>{
const auth = async (req, res, next) => {
    try{ 
        
        const token = req.header('Authorization').replace('Bearer ','');

        const decoded = jwt.verify(token, 'key');

        const usuario = await db.user.findOne({
            attributes:['id','email','password','administrator'],
            where:{
                id: decoded.id,
                token : {
                    [Op.substring]: token
                }
            }      
        })

        if(!usuario){
            throw new Error()
        }
        
        req.usuario = usuario;
        
        req.token = token;
        next()
    }catch(error){
        res.status(401).send({error: 'Por favor, se autentique.'})
    }

}
return auth
}