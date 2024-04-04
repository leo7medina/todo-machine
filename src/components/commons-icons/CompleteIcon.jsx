import React from 'react'
import { TodoIcon } from '../todo-icon/TodoIcon'

function CompleteIcon({completed, onComplete}) {
  return (
    <TodoIcon
        type="check"
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}
    />
  )
}

export {CompleteIcon}