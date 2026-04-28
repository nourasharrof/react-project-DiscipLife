import React, { useState } from "react";
import { Styles } from "./styleLogin";
import { useAuth } from "../../contex/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthPage({ onClose }) {
  const [mode, setMode] = useState("login");
  const [hiding, setHiding] = useState(false);
  const [errors, setErrors] = useState({});
  const [forgotMode, setForgotMode] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetDone, setResetDone] = useState(false);

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPassword = (password) =>
    password.length >= 6 && password.length <= 12;

  const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");

  const saveUsers = (users) =>
    localStorage.setItem("users", JSON.stringify(users));

  const handleClose = () => {
    setHiding(true);
    setTimeout(onClose, 200);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    let newErrors = {};

    if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    const users = getUsers();

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      newErrors.password = "Wrong email or password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    login({ name: user.name, email: user.email });
    navigate("/dashboard", { replace: true });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    let newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!isValidEmail(email)) newErrors.email = "Invalid email format";
    if (!isValidPassword(password))
      newErrors.password = "Password must be 6-12 characters";

    const users = getUsers();
    const exists = users.find((u) => u.email === email);

    if (exists) {
      newErrors.email = "User already exists, please login";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    saveUsers(users);

    register({ name, email });
    navigate("/dashboard", { replace: true });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!isValidEmail(resetEmail)) {
      newErrors.email = "Invalid email format";
      setErrors(newErrors);
      return;
    }

    const users = getUsers();
    const index = users.findIndex((u) => u.email === resetEmail);

    if (index === -1) {
      newErrors.email = "No account found with this email";
      setErrors(newErrors);
      return;
    }

    users[index].password = "123456";
    saveUsers(users);

    setResetDone(true);
    setErrors({});
  };

  return (
    <Styles>
      <div
        className={`auth-modal show ${hiding ? "hide" : ""}`}
        onClick={handleClose}
      >
        <div className="auth-container" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>

          <div className="auth-left">
            {!forgotMode && mode === "login" && (
              <>
                <h2>Welcome Back 👋</h2>
                <p>Login to continue your journey</p>

                <button
                  onClick={() => {
                    setMode("register");
                    setErrors({});
                  }}
                >
                  Create Account
                </button>

                <button
                  onClick={() => {
                    setForgotMode(true);
                    setErrors({});
                  }}
                  className="forget"
                >
                  Forgot Password?
                </button>
              </>
            )}

            {!forgotMode && mode === "register" && (
              <>
                <h2>Join Us 🚀</h2>
                <p>Create your account and start now</p>

                <button
                  onClick={() => {
                    setMode("login");
                    setErrors({});
                  }}
                >
                  Back to Login
                </button>
              </>
            )}

            {forgotMode && (
              <>
                <h2>Reset Password 🔐</h2>
                <p>Enter your email to reset password</p>

                <button
                  onClick={() => {
                    setForgotMode(false);
                    setResetDone(false);
                    setResetEmail("");
                    setErrors({});
                  }}
                >
                  Back
                </button>
              </>
            )}
          </div>

          <div className="auth-right">
            {mode === "login" && !forgotMode && (
              <form onSubmit={handleLogin} className="form">
                <input name="email" placeholder="Email" />
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}

                <input name="password" type="password" placeholder="Password" />
                {errors.password && (
                  <span className="error-text">{errors.password}</span>
                )}

                <button type="submit">Login</button>
              </form>
            )}

            {mode === "register" && (
              <form onSubmit={handleRegister} className="form">
                <input name="name" placeholder="Name" />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}

                <input name="email" placeholder="Email" />
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}

                <input
                  name="password"
                  type="password"
                  placeholder="Password (6-12 chars)"
                />
                {errors.password && (
                  <span className="error-text">{errors.password}</span>
                )}

                <button type="submit">Register</button>
              </form>
            )}

            {forgotMode && (
              <form onSubmit={handleResetPassword} className="form">
                {!resetDone ? (
                  <>
                    <input
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="Enter email"
                    />

                    {errors.email && (
                      <span className="error-text">{errors.email}</span>
                    )}

                    <button type="submit">Reset Password</button>
                  </>
                ) : (
                  <p style={{ color: "lightgreen" }}>
                    Password reset to <b>123456</b>
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default AuthPage;
