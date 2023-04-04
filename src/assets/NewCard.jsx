import { useState } from 'react'
import Modal from 'react-modal'
import uuid from "react-uuid"
import { AiOutlineArrowUp } from 'react-icons/ai'

import '../index.css'


function NewCard({title}) {
  
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleAddTask() {
    const newTask = {
      title: inputValue,
      id: uuid()
    }

    setTasks((prev) => [...prev, newTask])
    closeModal()
    setInputValue("")
  }
  
  function handleRemoveTask(idToRemove) {
    const newList = tasks.filter((task) => task.id !== idToRemove)
    setTasks(newList)
  }

  function handleGetInputValue(event) {
    setInputValue(event.target.value)
  }

  function handlePrioritizeTask(index, task) {
    console.log(index, task)
    let newList = tasks.splice(index, 1)
    newList = [task, ...tasks]
    setTasks(newList)
  }

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
    setInputValue("")
  }


  return (
    <div className='container'>
      <h1>{title}</h1>
      {tasks.length === 0 && <h1>Nenhum card adicionado!</h1>}
      <ul>
        {tasks.map((task) => (
          <div className='card' key={task.id}>
            <li>{task.title}</li>
            <AiOutlineArrowUp className='arrow-up' onClick={() => {handlePrioritizeTask(tasks.indexOf(task), task)}} />
            <button className='close-task'  onClick={() => {handleRemoveTask(task.id)}}>X</button>
          </div>
        ))}
      </ul>
      <button className='btn add-task' onClick={openModal}>adicionar Tarefa</button>
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
      ariaHideApp={false}
      >
        <input value={inputValue} onChange={() => handleGetInputValue(event)} type="text" />
        <button disabled={inputValue === ""} onClick={handleAddTask}>Confirmar</button>
        <button onClick={closeModal}>Cancelar</button>
      </Modal>
    </div>
  )
}

export default NewCard