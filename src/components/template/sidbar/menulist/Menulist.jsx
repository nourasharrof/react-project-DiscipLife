import React from "react";
import { Styles } from "./stylesMenu.js";
import { Link, NavLink } from "react-router-dom";
import { MdCategory, MdDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { GiHistogram } from "react-icons/gi";
import { FiDollarSign, FiSettings, FiTrendingUp } from "react-icons/fi";
const Menulist = () => {
  return (
    <Styles>
      <ul className="menu--list">
        <li className="menu--list-item ">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <MdDashboard className="icon" style={{ color: "#0c4b14" }} />
            Dashbord
          </NavLink>
        </li>
        <li className="menu--list-item">
          <NavLink
            to="/task"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BiTask className="icon" style={{ color: "#e25b1d" }} />
            Task
          </NavLink>
        </li>
        <li className="menu--list-item">
          <NavLink
            to="/budget"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaWallet className="icon" style={{ color: "#0804d3" }} />
            Budget
          </NavLink>
        </li>
        <li className="menu--list-item">
          <NavLink
            to="/saving"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FiTrendingUp className="icon" style={{ color: " #000" }} />
            savings
          </NavLink>
        </li>
        <li className="menu--list-item">
          <NavLink
            to="/expenses"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaMoneyBill1Wave className="icon" style={{ color: "#25671e" }} />
            Expenses
          </NavLink>
        </li>
        <li className="menu--list-item">
          <NavLink
            to="/categ"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <MdCategory className="icon" style={{ color: "#da8312" }} />
            category
          </NavLink>
        </li>
        <li className="menu--list-item">
          <NavLink
            to="/reports"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <GiHistogram className="icon" style={{ color: "#da0b61" }} />
            reports
          </NavLink>
        </li>
        <li className="menu--list-item">
          <NavLink
            to="/setting"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FiSettings className="icon" style={{ color: "#2c3e50" }} />
            settings
          </NavLink>
        </li>
      </ul>
    </Styles>
  );
};

export default Menulist;
