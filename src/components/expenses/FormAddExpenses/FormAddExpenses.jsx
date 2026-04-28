import { Styles } from "./styleAddExpenses";
import { useState, useEffect } from "react";
import photoTask from "../../../../public/addExpenses.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormAddExpenses = ({ onCreate }) => {
  const [expensName, setExpensName] = useState("");
  const [expensAmont, setExpensAmont] = useState(0);

  const [categoryId, setCategoryId] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const savedCategories = JSON.parse(
      localStorage.getItem("expenseCategories") || "[]",
    );

    setCategories(savedCategories);

    if (savedCategories.length > 0) {
      setCategoryId(savedCategories[0].id);
    }
  }, []);

  const handleCancel = () => {
    setExpensName("");
    setExpensAmont(0);
    setCategoryId(categories[0]?.id || "");
    setStartDate(new Date());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!expensName.trim()) {
      alert("⚠️ Please enter expense name");
      return;
    }

    if (!categoryId) {
      alert("⚠️ Please select a category");
      return;
    }

    onCreate(
      expensName,
      Number(expensAmont),
      categoryId,
      startDate.toISOString(),
    );

    handleCancel();
  };

  return (
    <Styles>
      <div className="container--all">
        <div className="expense-card-container">
          {/* HEADER */}
          <div className="card-title">
            <h2>Daily Expenses</h2>
            <img src={photoTask} alt="expenses" />
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="expenses-form">
            <label>Expense Name</label>
            <input
              value={expensName}
              onChange={(e) => setExpensName(e.target.value)}
              placeholder="e.g. Coffee, Rent..."
            />

            <label>Amount</label>
            <input
              type="number"
              value={expensAmont}
              onChange={(e) => setExpensAmont(e.target.value)}
              placeholder="0"
            />

            <label>Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="MM/dd/yyyy h:mm aa"
            />

            <label>Category</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(Number(e.target.value))}
            >
              {categories.length === 0 ? (
                <option>No categories</option>
              ) : (
                categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))
              )}
            </select>

            <div className="buttons">
              <button type="submit" className="add-btn">
                Add Expense
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Styles>
  );
};

export default FormAddExpenses;
