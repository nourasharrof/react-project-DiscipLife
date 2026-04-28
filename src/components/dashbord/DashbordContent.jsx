import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Styles } from "./stylesDash";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

const DashboardContent = () => {
  const [tasks, setTasks] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [budgetData, setBudgetData] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const load = () => {
      setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
      setExpenses(JSON.parse(localStorage.getItem("expenses") || "[]"));
      setBudgetData(JSON.parse(localStorage.getItem("budgetData") || "null"));
      setCategories(
        JSON.parse(localStorage.getItem("expenseCategories") || "[]"),
      );
    };

    load();
    window.addEventListener("storage", load);

    return () => window.removeEventListener("storage", load);
  }, []);

  const totalBudget =
    (budgetData?.monthlySalary || 0) + (budgetData?.extraIncome || 0);

  const totalExpenses = expenses.reduce(
    (sum, e) => sum + (Number(e.amount || e.expensAmount) || 0),
    0,
  );

  const remaining = totalBudget - totalExpenses;

  const usedPercent =
    totalBudget === 0 ? 0 : (totalExpenses / totalBudget) * 100;

  const savingsPercent =
    totalBudget === 0 ? 0 : (remaining / totalBudget) * 100;

  const today = new Date().toDateString();

  const completedToday = tasks.filter((t) => {
    if (!t.completed) return false;

    const completedDate = t.completedAt
      ? new Date(t.completedAt).toDateString()
      : today;

    return completedDate === today;
  }).length;

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  const progressPercent =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const budget = useMemo(() => {
    const map = {};

    expenses.forEach((exp) => {
      const cat = categories.find((c) => c.id === exp.category);
      const name = cat?.name || "Other";
      const amount = Number(exp.amount || exp.expensAmount) || 0;

      if (!map[name]) {
        map[name] = { name, value: 0 };
      }

      map[name].value += amount;
    });

    return Object.values(map);
  }, [expenses, categories]);

  const COLORS = [
    "#00bb00",
    "#ff8c42",
    "#ff4d6d",
    "#3a86ff",
    "#9b59b6",
    "#f1c40f",
  ];
  const getColor = (index) => {
    return COLORS[index % COLORS.length];
  };

  return (
    <Styles>
      <div className="dashboard-content">
        <h1 className="page-title">Dashboard</h1>
        <p>Overview of your account and activities</p>
        {completedToday >= 2 && (
          <div className="achievement-badge">
            <span>
              🎉 Great job! You completed {completedToday} tasks today!
            </span>
          </div>
        )}

        <div className="grid">
          <div className="card task-card">
            <h3>Today's Tasks</h3>

            <div className="progress-bar">
              <div
                className="progress-filled"
                style={{ width: `${progressPercent}%`, background: " #3b82f6" }}
              />
            </div>

            <span>{progressPercent}% Completed</span>

            {tasks.map((task) => (
              <div
                key={task.id}
                className={`task ${task.completed ? "done" : ""}`}
              >
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={task.completed}
                  readOnly
                />
                <span>{task.name}</span>

                <span className={`badge ${task.priority || "medium"}`}>
                  {task.priority || "medium"}
                </span>
              </div>
            ))}
          </div>

          <div className="budget-card">
            <h4>Total Budget</h4>
            <h1>${totalBudget}</h1>

            <div
              style={{
                width: "100%",
                height: "8px",

                background: " rgba(255, 255, 255, 0.2)",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${Math.min(usedPercent, 100)}%`,
                  height: "100%",
                  background: "#ef4444",
                }}
              />
            </div>

            <div className="budget-info">
              <span className="budget-used">Used: ${totalExpenses}</span>
              <span className="budget-remining">Remaining: ${remaining}</span>
            </div>
          </div>

          <div className="budget-card saving-card">
            <h4 className="sav-title">Savings</h4>

            <h1 className="sav-remining">${remaining}</h1>

            <div
              style={{
                width: "100%",
                height: "8px",
                background: "rgba(255, 255, 255, 0.25)",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${Math.max(savingsPercent, 0)}%`,
                  height: "100%",
                  background: "#22c55e",
                }}
              />
            </div>

            <span className="sav-percent">{savingsPercent.toFixed(0)}%</span>
          </div>

          <div className="card span-2">
            <h3>Expense Distribution</h3>

            {budget.map((item, i) => {
              const percent =
                totalExpenses === 0 ? 0 : (item.value / totalExpenses) * 100;

              return (
                <div key={i} style={{ marginBottom: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{item.name}</span>
                    <span>${item.value}</span>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      background: "#eee",
                      borderRadius: "6px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${percent}%`,
                        height: "100%",
                        background: getColor(i),
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="card quick-card">
            <h3>Quick Actions</h3>

            <NavLink to="/expenses" className="action green">
              Add Expense
            </NavLink>

            <NavLink to="/budget" className="action blue">
              Create Budget
            </NavLink>

            <NavLink to="/reports" className="action purple">
              View Reports
            </NavLink>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default DashboardContent;
