import React, { useState, useEffect } from "react";
import CategoriesContent from "./categories/CategoriesContent";
import FormTask from "./tasks/FormTask";

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);


  const handleAddCategory = (color, name) => {
    const newCategory = { id: Date.now(), color, name };
    setCategories((prev) => [...prev, newCategory]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <CategoriesContent
        categories={categories}
        setCategories={setCategories}
        onAddCategory={handleAddCategory}
      />
      <FormTask
        categories={categories}
        onCreate={(taskName, desc, priority, category, date) => {
          console.log("Task Created:", {
            taskName,
            desc,
            priority,
            category,
            date,
          });
        }}
      />
    </div>
  );
};

export default App;
