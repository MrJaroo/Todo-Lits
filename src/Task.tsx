import React, {ChangeEvent} from 'react';

type TaskPropsType = {
    TodoListId: string
    id: string,
    title: string,
    isDone: boolean
    removeTasks: (TodoListId: string, taskID: string) => void;
    changeTasksStatus: (todoListId: string, taskID: string, isDone: boolean) => void
}


const Task = (props: TaskPropsType) => {

    const onClickRemoveTask = () => {
        return props.removeTasks(props.TodoListId, props.id)
    }
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        return props.changeTasksStatus(props.TodoListId,props.id, e.currentTarget.checked)
    }

    return (
        <li key={props.id}>
            <input type="checkbox"
                   checked={props.isDone}
                   onChange={onChangeStatus}
            />
            <span>{props.title}</span>
            <button onClick={onClickRemoveTask}>X
            </button>
        </li>
    );
};

export default Task;