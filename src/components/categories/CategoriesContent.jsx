import React, { useState, useEffect } from "react";
import { Styles } from "./styleCategries.js";

import FormTaskCategory from "./formTaskCategory/FormTaskCategory.jsx";
import FormExpenseCategory from "./formExpenses/FormExpensesCategory.jsx";
import { v4 as uuidv4 } from "uuid";

const CategoriesContent = () => {
  const [categories, setCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);

  const [catShow, setCatShow] = useState(false);
  const [expenseShow, setExpenseShow] = useState(false);

  const [activeTaskId, setActiveTaskId] = useState(null);
  const [activeExpenseId, setActiveExpenseId] = useState(null);

  useEffect(() => {
    const storedCategories = localStorage.getItem("categories");
    const storedExpenses = localStorage.getItem("expenseCategories");

    setCategories(storedCategories ? JSON.parse(storedCategories) : []);
    setExpenseCategories(storedExpenses ? JSON.parse(storedExpenses) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem(
      "expenseCategories",
      JSON.stringify(expenseCategories),
    );
  }, [expenseCategories]);

  // TASK
  const handleAddCategory = (color, name) => {
    const newCategory = {
      id: uuidv4(),
      color,
      name,
    };

    setCategories((prev) => [...prev, newCategory]);
  };

  const handleDeleteCategory = (id) => {
    setCategories((prev) => prev.filter((item) => item.id !== id));
  };

  // EXPENSE
  const handleAddExpenseCategory = (color, name, emoji) => {
    const newCategory = {
      id: uuidv4(),
      color,
      name,
      emoji: emoji || "$",
    };

    setExpenseCategories((prev) => [...prev, newCategory]);
  };

  const handleDeleteExpense = (id) => {
    setExpenseCategories((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Styles>
      <section className="container">
        <h2 className="main-title">Categories</h2>
        <p className="sub-title">Manage your task & expense categories</p>

        <div className="cards">
          <div className="card">
            <div className="card-header">
              <h3>Task Categories :</h3>
              <button className="button" onClick={() => setCatShow(true)}>
                + Add Task Categories
              </button>
            </div>

            <div className="card-body">
              {categories.length === 0 && (
                <p className="empty">No task categories yet</p>
              )}

              <div className="chips">
                {categories.map((cat) => {
                  const isActive = activeTaskId === cat.id;

                  return (
                    <div
                      key={cat.id}
                      className={`chip ${isActive ? "active" : ""}`}
                      onClick={() => setActiveTaskId(isActive ? null : cat.id)}
                    >
                      <div
                        className="color"
                        style={{ backgroundColor: cat.color }}
                      />

                      {isActive && <span>{cat.name}</span>}

                      <button
                        className="delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCategory(cat.id);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* EXPENSE CARD */}
          <div className="card">
            <div className="card-header">
              <h3>Expense Categories : </h3>
              <button className="button" onClick={() => setExpenseShow(true)}>
                + Add Expense Categories
              </button>
            </div>

            <div className="card-body">
              {expenseCategories.length === 0 && (
                <p className="empty">No expense categories yet</p>
              )}

              <div className="chips">
                {expenseCategories.map((cat) => {
                  const isActive = activeExpenseId === cat.id;

                  return (
                    <div
                      key={cat.id}
                      className={`chip ${isActive ? "active" : ""}`}
                      onClick={() =>
                        setActiveExpenseId(isActive ? null : cat.id)
                      }
                    >
                      <div className="emoji">{cat.emoji || "💰"}</div>

                      {isActive && <span>{cat.name}</span>}

                      <button
                        className="delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteExpense(cat.id);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {catShow && (
          <div className="modal">
            <FormTaskCategory
              onCreate={handleAddCategory}
              onClose={() => setCatShow(false)}
            />
            <button className=" close-modal" onClick={() => setCatShow(false)}>
              ✕
            </button>
          </div>
        )}

        {expenseShow && (
          <div className="modal">
            <FormExpenseCategory onCreate={handleAddExpenseCategory} />
            <button
              className="close-modal"
              onClick={() => setExpenseShow(false)}
            >
              ✕
            </button>
          </div>
        )}
      </section>
    </Styles>
  );
};

export default CategoriesContent;
