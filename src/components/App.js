import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES, TASKS });

function App() {
  //STATE
  const[tasks, setTasks] = useState(TASKS);
  const[selectedCategory, setSelectedCategory] = useState("All");


  //add new task
  const onAddNewTask = (newTask) => {
    setTasks(tasks =>{
     return [...tasks,
      newTask]
    })
    
  }
  
  //callback func. to remove task from list filtering by text (unique property)
  const handleDeleteTask = (text) => {
    const newTaskList = tasks.filter(task => {
      return task.text !== text
    })
    setTasks(newTaskList);
  }
  
  //category button click function
  const handleCategoryBtn = (category) => {
    setSelectedCategory(category);
    const displayedTask = TASKS.filter(task => { 
      if(task.category === category){
        return task
      } else if (category === 'All'){
        return true
      }

    })
    setTasks(displayedTask);
    console.log(displayedTask)
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onHandleCategoryBtn={handleCategoryBtn}/>
      <NewTaskForm categories={CATEGORIES} onAddNewTask={onAddNewTask}/>
      <TaskList tasks={tasks} onHandleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

