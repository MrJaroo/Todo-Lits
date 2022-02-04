import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from 'uuid';
//C create
//R read
//U update
//D delete

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    // BLL
    const todoListTitle_1: string = 'What to learn';

    const [tasks_1, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'Html&Css', isDone: true},
        {id: v1(), title: 'JS/ES6', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
    ])

    const removeTasks = (taskID: string) => {
        const filteredTasks = tasks_1.filter(t => t.id != taskID) // должна вернуть true || false
        setTasks(filteredTasks)
    }

    const [filter, setFilter] = useState<FilterValuesType>("all")
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        const updatedTasks: Array<TaskType> = [newTask, ...tasks_1]
        setTasks(updatedTasks)
    }
    const changeTasksStatus = (taskID: string, isDone:boolean) => {
       const updatedTask = tasks_1.map(t => {
           if(t.id === taskID){
               return {...t, isDone: isDone}
           }
           else {
               return t;
           }
       })
        setTasks(updatedTask)
    }

    let tasksForRender = tasks_1;
    if (filter === 'active') {
        tasksForRender = tasks_1.filter(t => !t.isDone)
    }
    if (filter === 'completed') {
        tasksForRender = tasks_1.filter(t => t.isDone)
    } else {

    }


    // UI
    return (
        <div className="App">
            <TodoList title={todoListTitle_1}
                      tasks={tasksForRender}
                      filter={filter}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTasksStatus={changeTasksStatus}/>
        </div>
    );
}

export default App;
