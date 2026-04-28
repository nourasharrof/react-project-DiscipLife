import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./components/contex/AuthContext.jsx";

import DashbordPage from "./pages/dashbordPage/DashbordPage.jsx";
import CategoriesPage from "./pages/caregoriesPage/CategoriesPage.jsx";
import TaskPage from "./pages/taskPage/TaskPage.jsx";
import ReportsPage from "./pages/reportPage/ReportsPage.jsx";
import BudgetPage from "./pages/budgetPage/BudgetPage.jsx";
import ExpensesPage from "./pages/expensesPage/ExpensesPage.jsx";
import LandingPage from "./pages/landing-page/LandingPage.jsx";
import SettingsPage from "./pages/settingsPage/SettingsPage.jsx";
import ProtectedRoute from "./components/contex/ProtectRouter.jsx";
import SavingPage from "./pages/savingPage/SavingPage.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashbordPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/task"
          element={
            <ProtectedRoute>
              <TaskPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/budget"
          element={
            <ProtectedRoute>
              <BudgetPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/expenses"
          element={
            <ProtectedRoute>
              <ExpensesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/categ"
          element={
            <ProtectedRoute>
              <CategoriesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <ReportsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/setting"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saving"
          element={
            <ProtectedRoute>
              <SavingPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
