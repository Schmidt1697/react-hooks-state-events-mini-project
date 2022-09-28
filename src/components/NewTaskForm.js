import React, { useState } from "react";

function NewTaskForm({ categories, onAddNewTask}) {
  const [newTaskInput, setNewTaskInput] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('')
  
  const handleNewTaskInput = (e) => {
    e.preventDefault();
    setNewTaskInput(e.target.value)
    
  }
  const handleNewTaskCategory = (e) => {
    e.preventDefault();
    setNewTaskCategory(e.target.value)
    
  }

  const onTaskFormSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text: newTaskInput,
      category: newTaskCategory 
    }
    onAddNewTask(newTask)
  }

  const categoryOptions = categories.slice(1, categories.length).map(cat =>{
    return (
      <option value={cat}>{cat}</option>
    )
  })
  
  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleNewTaskInput} value={newTaskInput} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleNewTaskCategory} value={newTaskCategory} name="category">
          {categoryOptions}    
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
