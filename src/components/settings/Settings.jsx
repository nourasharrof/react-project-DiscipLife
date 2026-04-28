import React, { useState } from "react";
import { Styles } from "./styleSetting";
import { useAuth } from "../contex/AuthContext";

export default function Settings() {
  const { user, updateUser, logout } = useAuth();

  const [editingKey, setEditingKey] = useState(null);
  const [form, setForm] = useState(user);
  const [errors, setErrors] = useState({});
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  if (!user) return null;

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6 && password.length <= 12;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (key) => {
    setEditingKey(key);
    setErrors({});
  };

  const handleSave = () => {
    let newErrors = {};

    if (editingKey === "email" && !isValidEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (editingKey === "password" && !isValidPassword(form.password)) {
      newErrors.password = "Password must be 6-12 characters";
    }

    if (editingKey === "name" && !form.name) {
      newErrors.name = "Name is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    updateUser(form);
    setEditingKey(null);
    setErrors({});
  };

  const handleLogoutConfirm = () => {
    logout();
    setShowLogoutModal(false);
  };

  return (
    <Styles>
      <div className="settings-page">
        <div className="settings-header">
          <h2>Account Settings</h2>
          <p>Manage your personal information</p>
        </div>

        <div className="settings-row">
          <div className="label">Name</div>

          <div className="value">
            {editingKey === "name" ? (
              <>
                <input name="name" value={form.name} onChange={handleChange} />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}
              </>
            ) : (
              user.name
            )}
          </div>

          <button
            onClick={() =>
              editingKey === "name" ? handleSave() : handleEdit("name")
            }
          >
            {editingKey === "name" ? "Save" : "Edit"}
          </button>
        </div>

        <div className="settings-row">
          <div className="label">Email</div>

          <div className="value">
            {editingKey === "email" ? (
              <>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
              </>
            ) : (
              user.email
            )}
          </div>

          <button
            onClick={() =>
              editingKey === "email" ? handleSave() : handleEdit("email")
            }
          >
            {editingKey === "email" ? "Save" : "Edit"}
          </button>
        </div>

        <div className="settings-row">
          <div className="label">Password</div>

          <div className="value">
            {editingKey === "password" ? (
              <>
                <input
                  name="password"
                  type="password"
                  value={form.password || ""}
                  onChange={handleChange}
                />
                {errors.password && (
                  <span className="error-text">{errors.password}</span>
                )}
              </>
            ) : (
              "••••••••"
            )}
          </div>

          <button
            onClick={() =>
              editingKey === "password" ? handleSave() : handleEdit("password")
            }
          >
            {editingKey === "password" ? "Save" : "Update"}
          </button>
        </div>

        <button className="logout" onClick={() => setShowLogoutModal(true)}>
          Logout
        </button>

        {showLogoutModal && (
          <div className="logout-modal-overlay">
            <div className="logout-modal">
              <h3>Confirm Logout ⚠️</h3>
              <p>Are you sure you want to logout?</p>

              <div className="logout-actions">
                <button
                  className="btn-cancel"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancel
                </button>

                <button className="btn-logout" onClick={handleLogoutConfirm}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Styles>
  );
}
