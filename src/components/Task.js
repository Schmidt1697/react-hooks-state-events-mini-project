import React from "react";


function Task({ text, category, onHandleDeleteTask}) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onHandleDeleteTask(text)}>X</button>
    </div>
  );
}

export default Task;
