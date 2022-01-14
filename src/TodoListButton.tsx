import React from 'react';

type TodoListButtonPropsType = {
    title: string;
    onClickHandler: () => void
}

const TodoListButton = (props:TodoListButtonPropsType) => {
    return (
        <button onClick={props.onClickHandler}>{props.title}</button>
    );
};

export default TodoListButton;