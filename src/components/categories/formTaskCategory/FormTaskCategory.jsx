import React, { useState } from "react";
import myPhoto from "../../../../public/TodoListPhoto.jpg";
import { Styles } from "./stylesFormTask";

const colors = [
  "#c62828",
  "#ef8f2f",
  "#fbc02d",
  "#2e7d32",
  "#5c6bc0",
  "#1a237e",
  "#8e24aa",
  "#d7a4a8",
];

export default function FormTaskCategory({ onClose }) {
  //------------------Hooks------------------------------------------//
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [name, setName] = useState("");

  //--------------------cancel------------------------------------------//
  const handleCancel = () => {
    setName("");
    setSelectedColor(colors[0]);
  };

  //--------------------create------------------------------------------//
  const handleCreate = () => {
    if (!name.trim()) {
      alert("Please enter category name");
      return;
    }

    const savedCategories = JSON.parse(
      localStorage.getItem("categories") || "[]",
    );

    const newCategory = {
      id: Date.now(),
      name: name.trim(),
      color: selectedColor,
    };

    localStorage.setItem(
      "categories",
      JSON.stringify([...savedCategories, newCategory]),
    );

    setName("");
    setSelectedColor(colors[0]);
    if (onClose) {
      onClose();
    }
  };

  //----------------------------render--------------------------------------------//
  return (
    <Styles>
      <div className="card--container">
        <div className="todo--list">
          <div className="header">
            <h2 className="head-card">New Task Category</h2>
            <img src={myPhoto} alt="todo" />
          </div>

          {/* ---------------- INPUT ---------------- */}
          <div className="text--enter">
            <h3>Category Name:</h3>

            <input
              type="text"
              placeholder="e.g. Work, Study, Shopping..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
          </div>

          {/* ---------------- COLORS ---------------- */}
          <div className="container--colors">
            <h3>Color Label :</h3>

            <div className="colors">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`color-circle ${
                    selectedColor === color ? "active" : ""
                  }`}
                  style={{
                    backgroundColor: color,
                    border:
                      selectedColor === color
                        ? "3px solid #00ff00"
                        : "2px solid transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* ---------------- BUTTONS ---------------- */}
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
