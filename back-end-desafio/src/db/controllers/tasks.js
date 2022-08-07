const jwt = require('jsonwebtoken');

module.exports = (db) => {

    const getMyTasks = async (req) => {
        try{

            let myTasks = {}
            
            if(req.usuario?.administrator){//Usuario normal que filtra pelo ID
                myTasks = await db.tasks.findAll({
                    include:[{
                        model: db.user,
                        attributes:['email'],
                    }],
                })            
            }
            
            else {//Traz de todos os usuários com mais infos para os ADMs
                myTasks = await db.tasks.findAll({
                    where: {
                        idUser:req.usuario.id,
                    }
                })
            }
            //Sempre que cada task for chamada ele faz a verificação se está atrasada e seta o campo para verdadeiro caso esteja
            
            myTasks.map((task, index) =>{
                if((task.deadline).getTime() < new Date().getTime() && task.concluded == false){
                    task.late = true
                    task.save()
                }
            })
            return myTasks
        }
        
        catch(error){
            console.log(error)
            throw error
        }
    }
    
    const createTask = async (req) => {
        try{

            const data = new Date(req.body.deadline)

            const newTask = await db.tasks.create({
                description: req.body.description, 
                concluded: false, 
                late: false,
                idUser:req.usuario.id,
                deadline: data || new Date(),
                concludedAt:null, 
            })
            
            return newTask
        }
        catch(error){
            console.log(error)
            throw error
        }
    }

    const updateTask = async (req) => {
        try{
            const data = new Date(req.body.deadline)

            let task = req.body
            
            let findTaskById = await db.tasks.findOne({
                where: {
                    id: task.id
                }
            })
        

            if(!findTaskById || findTaskById == null) throw new Error("ID da task não existe")
            if(findTaskById.concluded == 1) throw new Error("Tasks concluídas não podem ser alteradas")
            
            //Altera descrição, coloca o novo prazo e retira o atrasado da mesma
            findTaskById.description = task.description
            findTaskById.deadline =  data || new Date()
            findTaskById.late = false
            
            findTaskById.save()
            
            const updatedTask = findTaskById
            
            return updatedTask
        }
        catch(error){
            console.log(error)
            throw error
        }
    }

    const concludeTask = async (req) => {
        try{
            
            let findTaskById = await db.tasks.findOne({
                where: {
                    id: req.body.task.id
                }
            })
            
            if(findTaskById.concluded == 0){
                //A task é concluída e deixa de estar atrasada
                findTaskById.late = false
                findTaskById.concluded = true
                findTaskById.concludedAt = new Date()
                
                findTaskById.save()
            }
        
            const concludedTask = findTaskById
            
            return concludedTask
        }
        
        catch(error){
            console.log(error)
            throw error
        }
    }

    return Object.create({
        getMyTasks,
        updateTask,
        createTask,
        concludeTask
    })
}