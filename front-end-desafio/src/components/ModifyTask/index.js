import React, { useState } from 'react';

import Modal from 'react-modal';
import { AddTaskButton } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const TaskModal = ({type, taskFunction, task}) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("")
  const [deadline, setDeadline] = useState("")

  
  return (
    <div>
      {
        task ?

          <button disabled={task.concluded} onClick={() => setIsOpen(true)}>{ type } task</button>
        :

          <AddTaskButton onClick={() => setIsOpen(true)}>
            <h1>
              { type } task 
            </h1>
          </AddTaskButton>
      }

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h2> { type } task</h2>
          <label>Prazo  </label>
          <input onChange={(e) => setDeadline(e.target.value)} min="new Date()" type="date"/>
          <br/>
          <label >Descrição  </label>
          <input onChange={(e) => setDescription(e.target.value)} type="text" />
        
          <br/>

          <button disabled={!description || !deadline}
          onClick={() => {
            let taskId = 0

            if(task?.id ) taskId = task?.id 

            const bodyTask = {
              id: taskId,
              description: description,
              deadline: deadline
            }
              taskFunction(task = bodyTask)
              setIsOpen(false)
            }}>
              Confirm
            </button>
        
        </Modal>
    </div>
  );
}

export default TaskModal