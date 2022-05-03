import React, {useState} from 'react';
import {useSelector} from "react-redux";
import ListItem from "./ListItem/ListItem";
import classes from './TodoList.module.css'
import {useTodos} from "../../hooks/useTodos";
import Loader from "../../ui/Loader/Loader";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    const users = useSelector(state => state.users.users)
    const [search, setSearch] = useState('')
    const [completed, setCompleted] = useState('All')
    const searchedAndSortedTodos = useTodos(todos, search, completed)
    if(!todos.length || !users.length) return <Loader/>
    return (
        <div className={classes.container}>
            <div className={classes.filter}>
                <input className={classes.search} type="text" value={search}
                       onChange={event => setSearch(event.target.value)}/>
                <select className={classes.completed} onChange={event => setCompleted(event.target.value)}>
                    <option value='All'>All</option>
                    <option value='To do'>To do</option>
                    <option value='In progress'>In progress</option>
                    <option value='Done'>Done</option>
                </select>
            </div>
            <ul className={classes.list}>
                {searchedAndSortedTodos.map(todo => <ListItem key={todo.id} todo={todo}/>)}
            </ul>
        </div>
    );
};

export default TodoList;