import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Area,
  AreaChart,
} from "recharts";

import useBudgetData from "./useBudgetData/useBudgetData";
import { Styles } from "./stylesReport";

//--------------------------------------------------------------------------------
const COLORS = [
  "#00bb00",
  "#ff8c42",
  "#ff4d6d",
  "#3a86ff",
  "#9b59b6",
  "#f1c40f",
];

// -----------------------------------------------------------------------------------
export default function ReportsContent() {
  const { expenses, records, totalIncome, totalExpenses, remaining } =
    useBudgetData();

  // -----------------------------------------------------------------------------------
  const categories = JSON.parse(
    localStorage.getItem("expenseCategories") || "[]",
  );

  // -----------------------------------------------------------------------------------
  const getCategoryName = (id) => {
    const cat = categories.find((c) => c.id === id);
    return cat?.name || "Other";
  };

  // -----------------------------------------------------------------------------------
  const safeExpenses = Array.isArray(expenses) ? expenses : [];
  const safeRecords = Array.isArray(records) ? records : [];

  const monthlySavingsData = safeRecords.map((r) => ({
    month: r.month,
    savings: (Number(r.income) || 0) - (Number(r.expenses) || 0),
  }));

  const monthlyExpensesData = safeRecords.map((r) => ({
    name: r.month,
    value: Number(r.expenses) || 0,
  }));

  // -----------------------------------------------------------------------------------
  const incomeExpensesData = safeRecords.map((r) => ({
    month: r.month,
    income: Number(r.income) || 0,
    expenses: Number(r.expenses) || 0,
  }));

  // -----------------------------------------------------------------------------------
  return (
    <Styles>
      <div className="reports-container">
        <h1>Reports</h1>
        <p>Analytics & Insights</p>

        <div className="stats-grid">
          <div className="stat-card salary">
            <h3>Salary</h3>

            <p>${totalIncome}</p>
          </div>
          <div className="stat-card expenses">
            <h3>Total Expenses</h3>
            <p>-${totalExpenses}</p>
          </div>
          <div className="stat-card remining">
            <h3>Remaining This Month</h3>
            <p>${remaining}</p>
          </div>
        </div>

        <div className="charts">
          <div className="chart-box">
            <h3> Monthly Expenses Overview </h3>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={monthlyExpensesData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label
                >
                  {monthlyExpensesData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box">
            <h3> Monthly Income vs Expenses</h3>

            {incomeExpensesData.length === 0 ? (
              <p style={{ opacity: 0.6 }}>No monthly data yet</p>
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={incomeExpensesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill="#00ff00" />
                  <Bar dataKey="expenses" fill="#ff4d6d" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
          <div className="chart-box span-2">
            <h3>Monthly Savings Overview</h3>

            {monthlySavingsData.length === 0 ? (
              <p style={{ opacity: 0.6 }}>No savings data yet</p>
            ) : (
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Tooltip />

                  <Pie
                    data={monthlySavingsData}
                    dataKey="savings"
                    nameKey="month"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    innerRadius={60}
                    paddingAngle={5}
                    label
                  >
                    {monthlySavingsData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </Styles>
  );
}
