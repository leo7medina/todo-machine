import React from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const noTildes = (text) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    }

    const {item: tasks, saveItem: saveTasks, loading, error} = useLocalStorage("TASK_V1", []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTask = tasks.filter(t => !!t.completed).length;
    const totalTask = tasks.length;

    const searchTask = tasks.filter(t =>{
        const taskText = noTildes(t.text.toLowerCase());
        const searchText = noTildes(searchValue.toLowerCase());
        return taskText.includes(searchText);
    });

    const onCompleteTask = (text) =>{
        const newTask = [...tasks];
        const index = newTask.findIndex(t => t.text === text);
        newTask[index].completed = true;
        saveTasks(newTask);
    }

    const onDeleteTask = (text) =>{
        const newTask = [...tasks];
        const index = newTask.findIndex(t => t.text === text);
        newTask.splice(index, 1);
        saveTasks(newTask);
    }
    const addTask = (text) => {
        const newTasks = [...tasks];
        newTasks.push({ text: text, completed: false});
        saveTasks(newTasks);
    }

    return(
        <TodoContext.Provider value={{
                loading,
                error,
                completedTask,
                totalTask,
                searchTask,
                searchValue,
                setSearchValue,
                openModal,
                setOpenModal,
                onDeleteTask,
                onCompleteTask,
                addTask
            }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};
