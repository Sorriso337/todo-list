import { createContext, useEffect, useState } from 'react';
import api from "../services/index";
import validator from 'validator'

const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token") || null
        if(token){ 
        api.defaults.headers.Authorization = `Bearer ${token}`
        setToken(token)
        }
    },[])

    const login = async () => {
        if(!validator.isEmail(email)){
            alert("Insira um email valido")
            throw new Error()
        }
        try{
                setLoading(true)
            
            const res = await api.post('/user/login', {email, password})

            const token = res.data.usuario.token
            api.defaults.headers.Authorization = `Bearer ${token}`
            localStorage.setItem("token", token);
            setToken(token)

            setLoading(false)
        }
        catch(error){
            console.log(error)
            error.response.data && alert(error.response.data)
        }
    }

    const logout = () => {
        setToken()
        api.defaults.headers.Authorization = ""
        localStorage.clear()
    }

    const getTasks = async () => {
        try{
            const res = await api.get('/task')
            console.log(res.data.myTasks)
            setTasks(res.data.myTasks || [])
        }
        catch(error){
            console.log(error)
        }
    }

    const concludeTask = async (task) => {
        try{
            const res = await api.put('/task/conclude',{task:task})
            console.log(res.data)
            getTasks()
        }
        catch(error){
            console.log(error)
        }
    }

    const updateTask = async (task) => {
        try{
            let taskBody = {
                id: task.id,
                description: task.description,
                deadline: task.deadline
            }

            await api.put('/task',taskBody)
            getTasks()
        }
        catch(error){
            console.log(error)
        }
    }

    const createTask = async (task) => {
        try{
            let taskBody = {
                description: task.description,
                deadline: task.deadline
            }
            console.log(taskBody)
            const res = await api.post('/task', taskBody)
            console.log(res.data)
            getTasks()
        }
        catch(error){
            console.log(error)
        }
    }

    const createUser = async () => {
        if(!validator.isEmail(email)){
            alert("Insira um email valido")
            throw new Error()
        }
        try{
            let user = {
                email:email,
                password:password,
                administrator: 0
            }
            await api.post('/user',user)
            alert("Cadastrado com sucesso")
        }
        catch(error){
            console.log(error)
            alert(error.message)
        }
    }

    return (
        <GlobalContext.Provider value={{
            login,
            token,
            loading,
            email,
            setEmail,
            password,
            setPassword,
            getTasks,
            tasks,
            createTask,
            updateTask,
            concludeTask,
            logout,
            createUser
        }}>
            {props.children}
        </GlobalContext.Provider>

    )
}

export default GlobalContext;