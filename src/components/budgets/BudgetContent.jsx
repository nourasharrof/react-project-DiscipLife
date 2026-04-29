import React, { useState, useEffect, useMemo } from "react";
import { Styles } from "./stylesBudget";
import AddNewBadgetCard from "./addNewBudgertCard/AddNewBadgetCard";

export default function BudgetContent() {
  const [showModal, setShowModal] = useState(false);

  const [budgetData, setBudgetData] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [records, setRecords] = useState([]);
  const [categories, setCategories] = useState([]);

  //------------------------------------------------------------------
  const safeJSON = (key, fallback) => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  };

  // --------------------------------------------------------------
  useEffect(() => {
    const load = () => {
      setBudgetData(safeJSON("budgetData", null));
      setExpenses(safeJSON("expenses", []));
      setRecords(safeJSON("monthlyRecords", []));
      setCategories(safeJSON("expenseCategories", []));
    };

    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);
  //---------------------------------------------------------------------
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);
  const handleEditBudget = () => {
    setEditData(budgetData);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleCreateBudget = (monthlySalary, budgetLimit) => {
    const data = {
      monthlySalary: Number(monthlySalary),
      budgetLimit: Number(budgetLimit),
    };

    localStorage.setItem("budgetData", JSON.stringify(data));
    setBudgetData(data);

    setShowModal(false);
    setIsEditing(false);
  };

  //---------------------------------------------------------------------
  const totalExpenses = expenses.reduce(
    (sum, e) => sum + (Number(e?.expensAmount) || 0),
    0,
  );

  const totalIncome = Number(budgetData?.monthlySalary) || 0;

  const remaining = totalIncome - totalExpenses;

  const percentage = totalIncome ? (totalExpenses / totalIncome) * 100 : 0;

  const budgetLimit = Number(budgetData?.budgetLimit) || 0;
  const hasBudgetLimit = budgetLimit > 0;
  const isOverBudget = hasBudgetLimit && totalExpenses > budgetLimit;

  //---------------------------------------------------------------------
  const getCategoryName = (categoryId) => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat?.name || "Other";
  };

  const groupedCategories = useMemo(() => {
    const map = {};

    expenses.forEach((exp) => {
      const name = getCategoryName(exp.category);
      const amount = Number(exp.expensAmount) || 0;

      if (!map[name]) {
        map[name] = {
          name,
          spent: 0,
          total: totalIncome,
        };
      }

      map[name].spent += amount;
    });

    return Object.values(map);
  }, [expenses, categories]);

  const progress = (spent, total) => (total ? (spent / total) * 100 : 0);

  //---------------------------------------------------------------------
  const handleDeleteRecord = (indexToDelete) => {
    // const confirmDelete = window.confirm("Are you sure?");
    // if (!confirmDelete) return;

    const updated = records.filter((_, i) => i !== indexToDelete);
    setRecords(updated);
    localStorage.setItem("monthlyRecords", JSON.stringify(updated));
  };
  const COLORS = [
    "#3b82f6",
    "#22c55e",
    "#f97316",
    "#a855f7",
    "#ef4444",
    "#14b8a6",
    "#eab308",
  ];

  const getColorByIndex = (index) => {
    return COLORS[index % COLORS.length];
  };

  //---------------------------------------------------------------------
  return (
    <Styles>
      <div className="page">
        <div className="container">
          <div className="header">
            <div>
              <h1 className="title">Budget</h1>
              <p>Plan and manage your monthly finances</p>
            </div>
            <div className="buttons">
              <button className="button" onClick={() => setShowModal(true)}>
                + Add Budget
              </button>
              <button className="button" onClick={handleEditBudget}>
                ✏️ Edit Budget
              </button>
            </div>
            {showModal && (
              <div className="modal">
                <AddNewBadgetCard
                  onCreate={handleCreateBudget}
                  isEditing={isEditing}
                  editData={editData}
                />
                <button
                  className="close-modal"
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <div className="grid-cards">
            <div className="card income">
              <p>Salary</p>
              <h2>${totalIncome}</h2>
            </div>

            <div className="card expense">
              <p>Total Expenses</p>
              <h2>${totalExpenses}</h2>
            </div>

            <div className="card remaining">
              <p>Remaining</p>
              <h2 style={{ color: remaining < 0 ? "red" : "blue" }}>
                ${remaining}
              </h2>
            </div>
          </div>

          <div className="progress-wrapper">
            <div className="header-wrapper">
              <div className="cardProgress">
                <p>Salary</p>
                <h2>${totalIncome}</h2>
              </div>
              <div className="cardProgress">
                <p>Budget Limit</p>
                <h2>${budgetLimit}</h2>
              </div>
            </div>

            <div className="progress-header">
              <span>Total Expense vs Salary</span>

              <span>
                ${totalExpenses} / ${totalIncome}
              </span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${Math.min(percentage, 100)}%`,
                  background: isOverBudget ? "#ef4444" : "#22c55e",
                }}
              />
            </div>

            {isOverBudget && (
              <div className="budget-warning">
                ⚠️ You have exceeded your budget limit!
              </div>
            )}
          </div>

          <div className="section">
            <h2 className="head-category">Categories Expense vs Salary</h2>

            {groupedCategories.map((cat, i) => {
              const percent = progress(cat.spent, cat.total);

              return (
                <div key={i} className="category-item">
                  <div className="category-header">
                    <span>{cat.name}</span>
                    <span>
                      ${cat.spent} / ${cat.total}
                    </span>
                  </div>

                  <div className="progress-bar small">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${percent}%`,
                        background: getColorByIndex(i),

                        borderRadius: "999px",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="budget-table">
            <h3>Monthly Budget History</h3>

            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Salary</th>
                  <th>Expenses</th>
                  <th>Remining</th>
                  <th>Budget Limit</th>
                  <th>Stauts</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {records.map((item, index) => (
                  <tr key={index}>
                    <td>{item.month}</td>
                    <td style={{ color: "green" }}>${item.income}</td>
                    <td style={{ color: "red" }}>-${item.expenses}</td>
                    <td style={{ color: "blue" }}>
                      ${item.income - item.expenses}
                    </td>
                    <td>${item.budgetLimit}</td>
                    <td>
                      {item.expenses > item.income ? "Over Budget" : "OK"}
                    </td>

                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteRecord(index)}
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Styles>
  );
}
