import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../../components/Navbar/Navbar";
import TaskView from "../../molecules/TaskView/TaskView";
import CreateTask from "../../molecules/CreateTask/CreateTask";
import EditTask from "../../molecules/EditTask/EditTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskView />}></Route>
          <Route path="/create-task" element={<CreateTask />}></Route>
          <Route path="/edit-task/:id" element={<EditTask />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
