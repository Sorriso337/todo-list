import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../contexts/globalContext';

import ModifyTask from '../ModifyTask'

import { 
    LogoutButton, Spacing, TaskDiv, TodoTitle 
} from './styles';

export default function Home () {

    const { logout, getTasks, tasks, createTask, updateTask, concludeTask } = useContext(GlobalContext)

    const [tasksFiltered, setTasksFiltered] = useState([])
    const [filter, setFilter] = useState(false)
    const [limit, setLimit] = useState(10)

    useEffect(() => {
        getTasks()
    },[])

    useEffect(() => {
        if(filter){
            setTasksFiltered(tasks.filter((task) => task.late === true) || [])
        }
        else{
            setTasksFiltered(tasks)
        }
    },[filter, tasks])
    return(
        <>
            <TodoTitle >TODO LIST</TodoTitle>
            <br/>
            <div>
            <label>Exibir apenas atrasados: </label> <input onChange={() => setFilter(!filter)} type="checkbox"/>
            {
                tasksFiltered?.map((task, index) => {
                    if(index > limit) return(<></>)
                    return(
                        <TaskDiv isLate={task.late} isConcluded={task.concluded}>
                            {
                                task?.user?.email && <p>E-mail que criou a task: {task.user.email} </p>
                            }
                            <label>Descrição: { task.description }</label>
                            <p>Prazo: { new Date(task.deadline).toString() } </p>
                            <ModifyTask type={"Edit"} task={task} taskFunction={updateTask}/>
                            <button disabled={task.concluded} onClick={() => {concludeTask(task)}}>Concluir</button>
                        </TaskDiv>
                        
                        )
                    })
            }
            </div>
            {
                limit < tasksFiltered.length && tasksFiltered.length > 10 &&
                <button onClick={() => setLimit(limit + 10)}>Carregar mais 10</button>
            }
            <Spacing />

            <ModifyTask type={"Add"} taskFunction={createTask}/>
            <LogoutButton onClick={logout}>LOGOUT</LogoutButton>
        </>
    )
}