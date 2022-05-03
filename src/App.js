import './App.css';
import React, {useEffect} from "react";
import {Routes, Route} from "react-router";
import Layout from "./pages/Layout";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "./asyncActions/fetchTodos";
import TodoList from "./components/TodoList/TodoList";
import {fetchUsers} from "./asyncActions/fetchUsers";

function App() {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
        dispatch(fetchTodos())
    },[])
  return (
    <Routes>
      <Route path = "/" element={<Layout/>}>
          <Route index element={<TodoList/>}/>
          <Route path = "board" element={<p>Board</p>}/>
      </Route>
    </Routes>
  );
}

export default App;
