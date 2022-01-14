import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
//C create
//R read
//U update
//D delete

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    // BLL
    const todoListTitle_1: string = 'What to learn';
    // let tasks_1: Array<TaskType> = [
    //     {id: 1, title: 'Html&Css', isDone: true},
    //     {id: 2, title: 'JS/ES6', isDone: true},
    //     {id: 3, title: 'React', isDone: false},
    //     {id: 4, title: 'Redux', isDone: false}
    // ]

    const [tasks_1, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'Html&Css', isDone: true},
        {id: 2, title: 'JS/ES6', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
    ])

    const removeTasks = (taskID: number) => {
        const filteredTasks = tasks_1.filter(t => t.id != taskID) // должна вернуть true || false
        setTasks(filteredTasks)
    }

    const [filter, setFilter] = useState<FilterValuesType>("all")
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }


    let tasksForRender = tasks_1;
    if (filter === 'active') {
        tasksForRender = tasks_1.filter(t => !t.isDone)
    }
    if (filter === 'completed') {
        tasksForRender = tasks_1.filter(t => t.isDone)
    }
    else {

    }


    // UI
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasksForRender} removeTasks={removeTasks}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
