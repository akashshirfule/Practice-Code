import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Listitem from "./Listitem";
import './ToDoList.css'

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState([]);
  const AddTask = (e) => {
    setTask(e.target.value);
  };

  const TaskList = (e) => {
    setNewTask((e) => {
      return [...e, task];
    });
    setTask("");
  };
//   const Allclear=(e)=>{
//     delete newTask[e];
//   }
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1 className="m-1">To Do List</h1>
          <input
            type="text"
            placeholder="add item"
            value={task}
            onChange={AddTask}
          />
          <Button className="addBtn" onClick={TaskList}>
            <AddIcon className=""></AddIcon>
          </Button>
          <ol>
            {newTask.map((val,index) => {
              return <Listitem key={index} text={val}/>;
            })}
          </ol>
         
        </div>
        {/* <button onClick={Allclear}>Clear</button> */}
      </div>
    </>
  );
};
export default ToDoList;
