import React from 'react';
import './App.css';
// import { TodoSearch } from '../components/todo-search/TodoSearch';
// import TodoList from '../components/todo-list/TodoList';
// import { TodoCounter } from '../components/todo-counter/TodoCounter';
// import { TodoItem } from '../components/todo-item/TodoItem';
// import { ButtonCreateTodo } from '../components/btn-create/ButtonCreateTodo';
//import {Todo} from '../models/todo.model';

// const task1: Todo = { id: 0, title: '', completed: false, editing: false};
const listTodos = [
  { text: 'Cortar ceb', completed: false},
  { text: 'Aprender ingles', completed: false},
  { text: 'Nuevo curso react', completed: false},
  { text: 'Nueva habilidad', completed: false},
  { text: 'Cortar ceb 2', completed: false}
];

// function App() {
//   return(
//     <div>
//       <p>Hola</p>
//       {/* <TodoCounter completed={16} total={25}/> */}
//       {/* <TodoSearch/>

//       <TodoList>
//         {listTodos.map(todo => {
//           <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
//         })}
//       </TodoList>

//       <ButtonCreateTodo/> */}
//     </div>
//   );
// }


function App() {
  return (
    <div></div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export  {App};
