import React from 'react'
import './ButtonCreateTodo.css';


function ButtonCreateTodo({setOpenModal}) {

  function handleClick(event) {
    setOpenModal(state => !state);
  }

  return (
    <button className="CreateTodoButton" onClick={handleClick}>+</button>
  )
}

export {ButtonCreateTodo}; 
