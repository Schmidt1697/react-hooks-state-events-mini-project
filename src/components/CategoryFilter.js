import React from "react";

function CategoryFilter({categories, selectedCategory, onHandleCategoryBtn}) {
// console.log(categories)

const categoryBtns = categories.map(category =>{
  const btnClass = category === selectedCategory ? 'selected': "";
    return (
    <button onClick={() => onHandleCategoryBtn(category)} className={btnClass} key={category}>{category}</button>
  )
})
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtns}
    </div>
  );
}

export default CategoryFilter;
