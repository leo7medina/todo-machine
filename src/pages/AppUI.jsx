import React from 'react'
import { TodoCounter} from '../components/todo-counter/TodoCounter';
import { TodoSearch} from '../components/todo-search/TodoSearch';
import { TodoList} from '../components/todo-list/TodoList';
import { TodoItem} from '../components/todo-item/TodoItem';
import { ButtonCreateTodo} from '../components/btn-create/ButtonCreateTodo';
import { TodoLoading } from '../components/todo-loading/TodoLoading';
import { TodoErros } from '../components/todo-errors/TodoErros';
import { EmptyTodos } from '../components/empty-todos/EmptyTodos';
import {TodoContext} from "../context/TodoContext";
import {Modal} from "../components/modal/Modal";
import {TodoForm} from "../components/todo-form/TodoForm";

function AppUI() {
    const {
        loading, error, searchTask, onCompleteTask, onDeleteTask,
        openModal, setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {loading &&
                    <>
                        <TodoLoading></TodoLoading>
                        <TodoLoading></TodoLoading>
                        <TodoLoading></TodoLoading>
                    </>
                }
                {error && <TodoErros/>}
                {(!!loading && searchTask.lenght === 0) && <EmptyTodos/>}
                {searchTask.map(task => (
                    <TodoItem
                        key={task.text}
                        text={task.text}
                        completed={task.completed}
                        onComplete={() => onCompleteTask(task.text)}
                        onDelete={() => onDeleteTask(task.text)}
                    />
                ))}
            </TodoList>

            <ButtonCreateTodo setOpenModal={setOpenModal}/>

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </>
    )
}

export {AppUI}





// Forma 1 para el use de TODOCONTEXT
// return (
//     <>
//         <TodoCounter/>
//         <TodoSearch/>
//
//         <TodoContext.Consumer>
//             {({loading, error, searchTask, onCompleteTask, onDeleteTask}) => (
//                 <TodoList>
//                     {loading &&
//                         <>
//                             <TodoLoading></TodoLoading>
//                             <TodoLoading></TodoLoading>
//                             <TodoLoading></TodoLoading>
//                         </>
//                     }
//                     {error && <TodoErros/>}
//                     {(!!loading && searchTask.lenght === 0) && <EmptyTodos/>}
//                     {searchTask.map(task => (
//                         <TodoItem
//                             key={task.text}
//                             text={task.text}
//                             completed={task.completed}
//                             onComplete={() => onCompleteTask(task.text)}
//                             onDelete={() => onDeleteTask(task.text)}
//                         />
//                     ))}
//                 </TodoList>
//             )}
//         </TodoContext.Consumer>
//
//         <ButtonCreateTodo/>
//     </>
// )
