import React from 'react';
import BoardItem from "../BoardItem/BoardItem";
import classes from './BoardList.module.css'

const BoardList = ({todos}) => {
    return (
        <>
            <ul className={classes.container}>
                {todos.map(todo => <BoardItem key={todo.id} todo={todo}/>)}
            </ul>
        </>
    );
};

export default BoardList;