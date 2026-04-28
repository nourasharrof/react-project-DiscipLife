import { Styles } from "./stylesExpensesContent.js";
import Button from "../common/button/Button.jsx";
import { useState, useEffect } from "react";
import ExpensesCard from "./FormAddExpenses/FormAddExpenses.jsx";

const ExpensesContent = () => {
  const [showModal, setShowModal] = useState(false);
  const [expense, setExpense] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const savedCategories = JSON.parse(
      localStorage.getItem("expenseCategories") || "[]",
    );

    const savedExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");

    setCategories(savedCategories);
    setExpense(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense));

    window.dispatchEvent(new Event("storage"));
  }, [expense]);

  const handleAddExpenses = (expensName, expensAmount, category, date) => {
    const newExpense = {
      id: Date.now(),
      expensName: String(expensName),
      expensAmount: Number(expensAmount),
      category,
      date,
    };

    setExpense((prev) => [...prev, newExpense]);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setExpense((prev) => prev.filter((t) => t.id !== id));
  };

  const formatDate = (date) =>
    date ? new Date(date).toLocaleString("en-Us") : "";

  return (
    <Styles>
      <div className="contain---all">
        <div className="top">
          <div className="title--page">
            <h2>Expenses</h2>
            <p>Track your spending habits</p>
          </div>

          <button onClick={() => setShowModal(true)} className="button">
            + New Expenses
          </button>

          {showModal && (
            <div className="modal">
              <ExpensesCard onCreate={handleAddExpenses} />
              <button
                className="close-modal"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <div className="bot">
          <h3>All Expenses</h3>

          {expense.length === 0 && (
            <p style={{ opacity: 0.6 }}>No expenses yet</p>
          )}

          <div className="list">
            {expense.map((exp) => {
              const category = categories.find((c) => c.id === exp.category);

              return (
                <div key={exp.id} className="expenses-item">
                  <div className="heder">
                    <p>💲 {exp.expensName}</p>

                    <button
                      className="delete"
                      onClick={() => handleDelete(exp.id)}
                    >
                      ✕
                    </button>
                  </div>

                  <div className="body">
                    <div className="left">
                      <p className="amount-text">
                        Amount:
                        <span className="amont">
                          {Number(exp.expensAmount).toFixed(2)}
                        </span>
                        <span className="dolar">$</span>
                      </p>

                      <span className="category">
                        <span className="emoji">{category?.emoji}</span>
                        <span className="nameCategory">
                          {category?.name || exp.category || "No Category"}
                        </span>
                      </span>
                    </div>

                    <span className="date">{formatDate(exp.date)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default ExpensesContent;
