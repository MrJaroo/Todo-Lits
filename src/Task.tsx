import React from 'react';

type TaskPropsType = {
    id: number,
    title: string,
    isDone: boolean
    removeTasks: (taskID:number) => void;
}

const Task = (props: TaskPropsType) => {
    return (
        <li key={props.id}>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
            <button onClick={() => props.removeTasks(props.id)}>X</button>
        </li>
    );
};

export default Task;