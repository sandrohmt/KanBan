import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import Modal from 'react-modal'

function AddCard({setCards}) {

  const [inputValue, setInputValue] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleAddCard() {
    const newCard = {
      title: inputValue,
      id: uuid()
    }
  
    setCards(cards => [...cards, newCard])
    closeModal()
    setInputValue("")
  }

  function handleGetInputValue(event) {
    setInputValue(event.target.value)
  }

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button className='btn add-card' onClick={openModal}>Adicionar Card</button>
      <Modal 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
      ariaHideApp={false}
      >
        <input value={inputValue} onChange={() => handleGetInputValue(event)} type="text" />
        <button disabled={inputValue === ""} onClick={handleAddCard}>Salvar</button>
      </Modal>
    </div>
  )
} 

export default AddCard