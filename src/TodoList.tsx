import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TodoListButton from "./TodoListButton";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTasks: (taskID: number) => void;
    changeFilter: (filter: FilterValuesType) => void
}

const TodoList = (props: TodoListPropsType) => {
    // const tasksCoponents = props.tasks.map(t => {
    //     return (
    //         <Task id={t.id} title={t.title} isDone={t.isDone}/>
    //     )
    // })
    const tasksCoponents = props.tasks.map(t => <Task id={t.id} title={t.title} isDone={t.isDone}
                                                      removeTasks={props.removeTasks}/>)
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksCoponents}
            </ul>
            <div>
                <TodoListButton onClickHandler={() => props.changeFilter('all')} title={'All'}/>
                <TodoListButton onClickHandler={()=> props.changeFilter('active')} title={'Active'}/>
                <TodoListButton onClickHandler={() => props.changeFilter('completed')} title={'Completed'}/>
            </div>
        </div>
    );
};

export default TodoList;