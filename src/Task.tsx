import React, {ChangeEvent} from 'react';

type TaskPropsType = {
    id: string,
    title: string,
    isDone: boolean
    removeTasks: (taskID: string) => void;
    changeTasksStatus:(taskID:string,isDone:boolean) => void
}


const Task = (props: TaskPropsType) => {

    const onClickRemoveTask = () => {
        return props.removeTasks(props.id)
    }
    const onChangeStatus = (e:ChangeEvent<HTMLInputElement>) => {
        return props.changeTasksStatus(props.id,e.currentTarget.checked)
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