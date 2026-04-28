import { Styles } from "./stylesTask";
import Button from "../common/button/Button.jsx";
import { useState, useEffect } from "react";

import ReminderModal from "./reminderModal/ReminderModal.jsx";
import FormTask from "./formTask/FormTask.jsx";

const TaskContent = () => {
  //------------------Hooks------------------------------------------//
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [reminderTask, setReminderTask] = useState(null);
  const [categories, setCategories] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  //--------------------------local storage------------------------------------------------//
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const savedCategories = JSON.parse(
      localStorage.getItem("categories") || "[]",
    );

    const parsedTasks = savedTasks.map((t) => ({
      ...t,
      reminder: t.reminder ? new Date(t.reminder) : null,
      endDate: t.endDate ? new Date(t.endDate) : null,
    }));

    setTasks(parsedTasks);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // -------Add OR Edit Task ---------------------------------------------------------//
  const handleAddTask = (
    name,
    description,
    priority,
    category,
    reminder,
    endDate,
  ) => {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTask.id
            ? {
                ...t,
                name,
                description,
                priority,
                category,
                reminder,
                endDate,
              }
            : t,
        ),
      );
    } else {
      const newTask = {
        id: Date.now(),
        name,
        description,
        priority,
        category,
        reminder,
        endDate,
        completed: false,
        notified: false,
      };

      setTasks((prev) => [...prev, newTask]);
    }

    setShowModal(false);
    setEditingTask(null);
  };

  // -------Delete Task ----------------------------------------------------------//
  const handleDelete = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  //-------Toggle Complete --------------------------------------------------------//
  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
              notified: !t.completed ? true : t.notified,
              completedManually: !t.completed,
            }
          : t,
      ),
    );
  };

  //-------Format Date -----------------------------------------------------//
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  //-------Reminder Notification ----------------------------------------------//
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      setTasks((prevTasks) => {
        if (reminderTask) return prevTasks;

        for (let task of prevTasks) {
          if (task.reminder && !task.notified && !task.completed) {
            const diff = new Date(task.reminder).getTime() - now.getTime();
            if (Math.abs(diff) < 1000) {
              setReminderTask(task);
              break;
            }
          }
        }
        return prevTasks;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [reminderTask]);

  //--------------------Render------------------------------------------//
  return (
    <Styles>
      {reminderTask && (
        <ReminderModal
          task={reminderTask}
          onCancel={() => setReminderTask(null)}
          onSnooze={() => {
            const newReminder = new Date(reminderTask.endDate);
            newReminder.setDate(newReminder.getDate() + 1);

            setTasks((prev) =>
              prev.map((t) =>
                t.id === reminderTask.id ? { ...t, endDate: newReminder } : t,
              ),
            );

            setReminderTask(null);
          }}
        />
      )}

      <div className="contain---all">
        <div className="top">
          <div className="title--page">
            <h2>Task</h2>
            <p>Manage your daily goals and priorities</p>
          </div>

          <button
            className="button"
            onClick={() => {
              setEditingTask(null);
              setShowModal(true);
            }}
          >
            + New Task
          </button>

          {showModal && (
            <div className="modal">
              <FormTask onCreate={handleAddTask} initialData={editingTask} />

              <button
                className="close-modal"
                onClick={() => {
                  setShowModal(false);
                  setEditingTask(null);
                }}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <div className="bot">
          <h3>All Tasks</h3>

          {tasks.length === 0 && <p>No tasks yet</p>}

          <div className="list">
            {tasks.map((task) => (
              <div key={task.id} className="Task-item">
                <div className="task-header">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                  />

                  <h4 className={task.completed ? "completed" : ""}>
                    {task.name}
                    {task.completed && (
                      <span className="notified-icon">✔️</span>
                    )}
                  </h4>
                </div>

                {task.description && <p>{task.description}</p>}

                <div className="meta">
                  <span className={`priority ${task.priority}`}>
                    {task.priority}
                  </span>

                  <span>
                    {categories.find((c) => c.id === task.category)?.name ||
                      "No Category"}
                  </span>

                  <span>{formatDate(task.endDate)}</span>
                  <button
                    style={{ background: "#fff", fontSize: "15px" }}
                    onClick={() => {
                      setEditingTask(task);
                      setShowModal(true);
                    }}
                  >
                    ✏️
                  </button>
                </div>

                <div className="actions">
                  <button
                    className="delete"
                    onClick={() => handleDelete(task.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default TaskContent;
