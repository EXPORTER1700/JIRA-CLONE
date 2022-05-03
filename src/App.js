import React, {useEffect} from "react";
import {Routes, Route} from "react-router";
import Layout from "./pages/Layout";
import {useDispatch} from "react-redux";
import {fetchTodos} from "./asyncActions/fetchTodos";
import TodoList from "./components/TodoList/TodoList";
import {fetchUsers} from "./asyncActions/fetchUsers";
import TodoBoard from "./components/TodoBoard/TodoBoard";


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchTodos())
    }, [])
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<TodoList/>}/>
                <Route path="board" element={<TodoBoard/>}/>
            </Route>
        </Routes>
    );
}

export default App;
