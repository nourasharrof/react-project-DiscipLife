import { Styles } from "./stylesFormTask";
import { useState, useEffect } from "react";
import photoTask from "../../../../public/taskPhoto.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormTask = ({ onCreate, initialData }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("");
  const [reminderDate, setReminderDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [categories, setCategories] = useState([]);

  //--------------------load categories------------------------------------------//
  useEffect(() => {
    const savedCategories = JSON.parse(
      localStorage.getItem("categories") || "[]",
    );
    setCategories(savedCategories);

    if (savedCategories[0] && !initialData) {
      setCategory(savedCategories[0].id);
    }
  }, []);

  //--------------------fill edit data------------------------------------------//
  useEffect(() => {
    if (initialData) {
      setTaskName(initialData.name);
      setTaskDescription(initialData.description);
      setPriority(initialData.priority);
      setCategory(initialData.category);
      setReminderDate(
        initialData.reminder ? new Date(initialData.reminder) : new Date(),
      );
      setEndDate(
        initialData.endDate ? new Date(initialData.endDate) : new Date(),
      );
    }
  }, [initialData]);

  //--------------------handle cancel------------------------------------------//
  const handleCancel = () => {
    setTaskName("");
    setTaskDescription("");
    setPriority("medium");
    setCategory(categories[0]?.id || "");
    setReminderDate(new Date());
    setEndDate(new Date());
  };

  //--------------------handle submit------------------------------------------//
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName.trim()) return alert("Please enter task name");
    if (!category) return alert("Please select a category");

    onCreate(
      taskName,
      taskDescription,
      priority,
      category,
      reminderDate.toISOString(),
      endDate.toISOString(),
    );

    handleCancel();
  };

  //--------------------render------------------------------------------//
  return (
    <Styles>
      <div className="container--all">
        <div className="task-card-container">
          <div className="card-title">
            <h2>{initialData ? "Edit Task" : "New Task"}</h2>
            <img src={photoTask} alt="task" />
          </div>

          <form onSubmit={handleSubmit} className="task-form">
            <label>Task Name</label>
            <input
              value={taskName}
              placeholder="e.g., Finish homework"
              onChange={(e) => setTaskName(e.target.value)}
              required
            />

            <label>Add Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="e.g., Buy milk, eggs, and bread from the store"
            />

            <div>
              <label>Priority :</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label>Reminder :</label>
              <DatePicker
                selected={reminderDate}
                onChange={(date) => setReminderDate(date)}
                showTimeSelect
                dateFormat="MM/dd/yyyy h:mm aa"
              />
            </div>

            <div>
              <label>End Date :</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                showTimeSelect
                dateFormat="MM/dd/yyyy h:mm aa"
              />
            </div>

            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose Category</option>

              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <div className="buttons">
              <button type="submit" className="add-btn">
                {initialData ? "Update Task" : "Add Task"}
              </button>

              <button
                className="cancel-btn"
                type="button"
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

export default FormTask;
