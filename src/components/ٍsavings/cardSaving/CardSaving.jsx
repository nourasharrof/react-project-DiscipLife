import React, { useEffect, useState } from "react";
import { Styles } from "./styleCard";
import myPhoto from "../../../../public/saving.jpg";

const CardSaving = ({ onCancel }) => {
  const [records, setRecords] = useState([]);
  const [budgetData, setBudgetData] = useState(null);
  const [expenses, setExpenses] = useState([]);
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
  const closeMonth = () => {
    const monthName = new Date().toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });

    const newRecord = {
      month: monthName,
      income: totalIncome,
      expenses: totalExpenses,
      savings: savings,

      date: new Date().toLocaleDateString(),
    };

    const updated = [...records, newRecord];

    localStorage.setItem("monthlyRecords", JSON.stringify(updated));
    setRecords(updated);

    //  reset
    localStorage.setItem("expenses", "[]");
    localStorage.removeItem("budgetData");

    setBudgetData(null);
    setExpenses([]);
  };
  return (
    <Styles>
      <div className="modal-overlay">
        <div className="modal-card">
          <h3 className="title">Month Closing</h3>

          <div className="calendar-icon">📆</div>

          <p className="subtitle">Confirm your monthly summary</p>

          <div className="summary">
            <div className="row">
              <span>Monthly Income</span>
              <span className="income">${totalIncome}</span>
            </div>

            <div className="row">
              <span>Total Expenses</span>
              <span className="expense">-${totalExpenses}</span>
            </div>

            <div className="divider" />

            <div className="row total">
              <span>Amount Saved</span>
              <span className="saving">${savings}</span>
            </div>
          </div>

          <div className="actions">
            <button onClick={onCancel} className="btn cancel">
              Cancel
            </button>
            <button onClick={closeMonth} className="btn confirm">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default CardSaving;
