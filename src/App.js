import './App.css';
import React from "react";
import {Routes, Route} from "react-router";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path = {'/'} element={<Layout/>}>
      </Route>
    </Routes>
  );
}

export default App;
