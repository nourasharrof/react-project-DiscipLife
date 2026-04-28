import React, { useState, useEffect } from "react";
import { Styles } from "./stylesSaving";
import CardSaving from "./cardSaving/CardSaving";

const Savings = () => {
  const [records, setRecords] = useState([]);
  const [budgetData, setBudgetData] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const savedRecords = JSON.parse(
      localStorage.getItem("monthlyRecords") || "[]",
    );

    const savedBudget = JSON.parse(
      localStorage.getItem("budgetData") || "null",
    );

    const savedExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");

    setRecords(savedRecords);
    setBudgetData(savedBudget);
    setExpenses(savedExpenses);
  }, []);

  const totalIncome = budgetData ? budgetData.monthlySalary : 0;

  const totalExpenses = expenses.reduce(
    (sum, e) => sum + Number(e.expensAmount),
    0,
  );

  const savings = totalIncome - totalExpenses;

  return (
    <Styles>
      <div className="dashboard">
        <div className="header">
          <h1>Savings</h1>
          <p>Track monthly savings history</p>
        </div>

        <div className="cards-container">
          <div className="card total">
            <h4>Monthly Archives</h4>
            <h2>${records.reduce((sum, r) => sum + r.savings, 0)}</h2>
          </div>

          <div className="card highlight">
            <h4>This Month Savings</h4>
            <h2>${savings}</h2>
          </div>
        </div>

        <div className="banner">
          <div>
            <h3>Ready to close the current month?</h3>
            <p>
              The remaining amount{" "}
              <span style={{ color: "red" }}>(${savings}) </span>will be saved.
            </p>
          </div>

          <button className="close-btn" onClick={() => setShow(true)}>
            Month-End Closing →
          </button>

          {show && (
            <div className="modal">
              <CardSaving onCancel={() => setShow(false)} />
              <button className="close-modal" onClick={() => setShow(false)}>
                ✕
              </button>
            </div>
          )}
        </div>
        <div className="saving-table">
          <h3>Monthly Savings Record</h3>
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
                  <td>{item.expenses > item.income ? "Over Budget" : "OK"}</td>

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
    </Styles>
  );
};

export default Savings;
