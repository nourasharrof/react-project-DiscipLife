import React, { useState } from "react";
import myExpen from "../../../../public/expenses.jpg";
import { Styles } from "./stylesFormExpenses";

// ------------------------------------------------- Emojis-----------//
const emojis = ["🍔", "🚗", "🏠", "💡", "🎮", "🛍️", "💊", "✈️", "📚"];

export default function FormExpenseCategory() {
  //------------------Hooks------------------------------------------//
  const [selectedEmoji, setSelectedEmoji] = useState(emojis[0]);
  const [name, setName] = useState("");

  //--------------------cancel------------------------------------------//
  const handleCancel = () => {
    setName("");
    setSelectedEmoji(emojis[0]);
  };

  //--------------------create------------------------------------------//
  const handleCreate = () => {
    if (!name.trim()) return alert("⚠️Please enter category name.");

    const savedCategories = JSON.parse(
      localStorage.getItem("expenseCategories") || "[]",
    );

    const newCategory = {
      id: Date.now(),
      name,
      emoji: selectedEmoji,
    };

    localStorage.setItem(
      "expenseCategories",
      JSON.stringify([...savedCategories, newCategory]),
    );

    setName("");
    setSelectedEmoji(emojis[0]);
  };

  //----------------------------render--------------------------------------------//
  return (
    <Styles>
      <div className="card--container">
        <div className="todo--list">
          <div className="header">
            <h2>New Expense Category</h2>
            <img src={myExpen} alt="expense" />
          </div>

          <div className="text--enter">
            <h3>Category Name: </h3>
            <input
              type="text"
              placeholder="e.g. Food, Transport, Rent..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
          </div>

          <div className="container--emoji">
            <h3>Choose Emoji:</h3>

            <div className="emojis">
              {emojis.map((emoji, index) => (
                <div
                  key={index}
                  className={`emoji-circle ${
                    selectedEmoji === emoji ? "active" : ""
                  }`}
                  onClick={() => setSelectedEmoji(emoji)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    backgroundColor: "#f1f1f1",
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          <div className="btn---container">
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>

            <button className="create" onClick={handleCreate}>
              Create
            </button>
          </div>
        </div>
      </div>
    </Styles>
  );
}
