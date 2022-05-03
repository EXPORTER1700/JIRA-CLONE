import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './ListItem.module.css'
import {changeCompletedTodoAction} from "../../../store/todos";

const ListItem = ({todo}) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const [user] = users.filter(user => user.id === todo['userId'])
    return (
        <li onClick={() => dispatch(changeCompletedTodoAction(todo.id))} className={classes.container}>
            <div className={classes.user}>
                <p style={{backgroundColor: user.color}}>{user.name.split(' ')[0][0]}{user.name.split(' ')[1][0]}</p>
            </div>
            <p className={classes.title}>{todo.title}</p>
            <p className={classes.completed}>{todo.completed}</p>
        </li>
    );
};

export default ListItem;