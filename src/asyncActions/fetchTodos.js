import {addManyTodosAction} from "../store/todos";

export const fetchTodos = () =>{
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res=>res.json())
            .then(todos => todos.map(todo => ({...todo, completed: 'To do'})))
            .then(data => dispatch(addManyTodosAction(data)))
    }
}