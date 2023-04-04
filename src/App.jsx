import { useState } from 'react'
import uuid from 'react-uuid'

import NewCard from './assets/NewCard'
import AddCard from './assets/AddCard'

import './index.css'

function App() {
  const [cards, setCards] = useState([
    {title: "To do", id: uuid()},
    {title: "Doing", id: uuid()},
    {title: "Done", id: uuid()},
  ])

  function handleRemoveCard(idToRemove) {
   const newList = cards.filter((card) => card.id !== idToRemove)
   setCards(newList)
  }

  return (
    <div>
      <h1>KANBAN</h1>
      <AddCard setCards={setCards}></AddCard>
      <ul className="main">
        {cards.map((card) => (
        <div className="cards" key={card.id}>
          <NewCard title={card.title}></NewCard>
          <button className='close-card' onClick={() => handleRemoveCard(card.id)}>X</button>
        </div> 
        ))}
      </ul>
    </div>
  )
}

export default App

// mover a tarefa de um card para o outro
// poder editar uma tarefa já criada obs: achar um jeito de identificar a task clicada para poder modifica-la
// escolher cor para os cards

//ESTILIZAÇÃO
// Diminuir o tamanho da fonte
// melhorar os cards
// estilizar os botões
// poder escolher uma cor diferente para os cards
