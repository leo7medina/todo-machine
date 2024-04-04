import React from 'react'
import { TodoIcon } from '../todo-icon/TodoIcon';


function DeleteIcon({onDelete}) {
  return (
    <TodoIcon type="delete" color="gray" onClick={onDelete}/>
  )
}

export {DeleteIcon};