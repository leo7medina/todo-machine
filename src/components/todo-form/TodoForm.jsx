import React from 'react';
import {TodoContext} from "../../context/TodoContext";
import './TodoForm.css';

function TodoForm() {
    const {addTask, setOpenModal} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue.trim().length > 0) {
            addTask(newTodoValue);
            setOpenModal(false);
        }

    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Realizar nueva tarea" value={newTodoValue} onChange={onChange}></textarea>
            <div>
                <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };
