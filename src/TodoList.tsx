import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import TodoListHeader from "./TodoListHeader";
import TodoListButton from "./TodoListButton";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTasks: (taskID: string) => void;
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void;
    changeTasksStatus: (taskID: string, isDone: boolean) => void
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const tasksCoponents = props.tasks.map(t => <Task key={t.id}
                                                      id={t.id}
                                                      title={t.title}
                                                      isDone={t.isDone}
                                                      removeTasks={props.removeTasks}
                                                      changeTasksStatus={props.changeTasksStatus}
    />)
    const onClickAddTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle('');
    }

    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && onClickAddTask()
    }

    const setAllFilter = () => props.changeFilter('all');
    const setActiveFilter = () => props.changeFilter('active')
    const setCompletedFilter = () => props.changeFilter('completed')
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }

    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetTitle}
                    onKeyPress={onKeyPressAddTask}
                    className={error ? 'error' : ''}
                />
                <button onClick={onClickAddTask}>+</button>
                {error && <div style={{color: 'red'}}> Title is required </div>}
            </div>
            <ul>
                {tasksCoponents}
            </ul>
            <div>
                <TodoListButton onClickHandler={setAllFilter}
                                title={'All'}
                                active={props.filter === 'all'}
                />
                <TodoListButton onClickHandler={setActiveFilter}
                                title={'Active'}
                                active={props.filter === 'active'}
                />
                <TodoListButton onClickHandler={setCompletedFilter}
                                title={'Completed'}
                                active={props.filter === 'completed'}
                />
            </div>
        </div>
    );
};

export default TodoList;