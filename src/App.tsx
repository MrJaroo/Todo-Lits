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

export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    // BLL
    const todoListID1 = v1();
    const todoListID2 = v1();

    const [tasks_1, setTasks] = useState({
        [todoListID1]: [
            {id: v1(), title: 'Html&Css', isDone: true},
            {id: v1(), title: 'JS/ES6', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},
        ],
        [todoListID2] : [
            {id: v1(), title: 'Html&Css', isDone: true},
            {id: v1(), title: 'JS/ES6', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},
        ]

    })

    let [todoList, setTodoList] = useState<Array<TodoListType>>([
        {id: todoListID1, title: 'What to learn', filter: 'all'},
        {id: todoListID2, title: 'What to bye', filter: 'all'},
    ])

    const removeTasks = (TodoListId:string,taskID: string) => {
        setTasks({...tasks_1, [TodoListId]:tasks_1[TodoListId].filter(f=> f.id !== taskID)})
    }

    const changeFilter = (todoListId: string, filter: FilterValuesType) => {
        setTodoList(todoList.map(m => m.id === todoListId ? {...m, filter:filter} : m))
    }

    const addTask = (todoListId:string,title: string) => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        setTasks({...tasks_1, [todoListId]:[newTask, ...tasks_1[todoListId]]})
    }
    const changeTasksStatus = (todoListId:string,taskID: string, isDone: boolean) => {
        setTasks({...tasks_1,[todoListId]:tasks_1[todoListId].map(m=> m.id === taskID ? {...m,isDone} : m)})
    }



    const renderTodoList = todoList.map((t, index) => {
        let tasksForRender = tasks_1[t.id];
        if (t.filter === 'active') {
            tasksForRender = tasks_1[t.id].filter(t => !t.isDone)
        }
        if (t.filter === 'completed') {
            tasksForRender = tasks_1[t.id].filter(t => t.isDone)
        }
        return (
            <TodoList title={t.title}
                      key={index}
                      TodoListId={t.id}
                      tasks={tasksForRender}
                      filter={t.filter}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTasksStatus={changeTasksStatus}/>
        )
    })


    // UI
    return (
        <div className="App">
            {renderTodoList}
        </div>
    );
}

export default App;
