import React from 'react';

type TodoListButtonPropsType = {
    title: string;
    onClickHandler: () => void
    active:boolean
}

const TodoListButton = (props:TodoListButtonPropsType) => {
    return (
        <button onClick={props.onClickHandler}
                className={props.active ? 'active' : ''}
        >{props.title}</button>
    );
};

export default TodoListButton;