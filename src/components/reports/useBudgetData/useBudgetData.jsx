import { useEffect, useState, useMemo } from "react";

export default function useBudgetData() {
  const [budgetData, setBudgetData] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [records, setRecords] = useState([]);

  const safeJSON = (key, fallback) => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  };

  useEffect(() => {
    const load = () => {
      setBudgetData(safeJSON("budgetData", null));
      setExpenses(safeJSON("expenses", []));
      setRecords(safeJSON("monthlyRecords", []));
    };

    load();

    window.addEventListener("storage", load);

    return () => window.removeEventListener("storage", load);
  }, []);

  const totalIncome = useMemo(() => {
    return (budgetData?.monthlySalary || 0) + (budgetData?.extraIncome || 0);
  }, [budgetData]);

  const totalExpenses = useMemo(() => {
    return expenses.reduce((sum, e) => sum + (Number(e.expensAmount) || 0), 0);
  }, [expenses]);

  const remaining = totalIncome - totalExpenses;

  return {
    budgetData,
    expenses,
    records,
    totalIncome,
    totalExpenses,
    remaining,
  };
}
