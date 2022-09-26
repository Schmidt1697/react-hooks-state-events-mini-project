import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  console.log(tasks)
  
  const taskList = tasks.map((task, index) =>{
    return(
      <Task key={index} {...task}/>
    )
  })

  console.log(taskList)
  
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
