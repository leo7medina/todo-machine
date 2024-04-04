import React from 'react';
import './TodoCounter.css';
import {TodoContext} from "../../context/TodoContext";

function TodoCounter() {

    const {completed, total} = React.useContext(TodoContext);

  return (
    <>
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOSs
      </h1>
    </>
  )
}

export { TodoCounter };
