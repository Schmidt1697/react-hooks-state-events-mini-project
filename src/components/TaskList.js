import React from "react";
import Task from "./Task";

function TaskList({ tasks, onHandleDeleteTask }) {
  const taskList = tasks.map((task, index) =>{
    return(
      <Task key={index} {...task} onHandleDeleteTask={onHandleDeleteTask}/>
    )
  })

  
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
