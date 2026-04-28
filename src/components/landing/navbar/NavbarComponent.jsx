import { useState } from "react";
import { Styles } from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <Styles>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            💰📝
            <span className="gradient">D</span>iscip
            <span className="gradient">L</span>ife
          </div>

          <ul className="links">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#features">Features</a>
            </li>

            <li>
              <a href="#process">Process</a>
            </li>

            <li>
              <a href="#usage">Usage</a>
            </li>

            <li>
              <a href="#opinion">Opinion </a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button className="menu-btn" onClick={() => setOpen(true)}>
            <FaBars />
          </button>
        </div>
      </nav>

      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* ---------------------------------------SIDEBAR ------------------------------------*/}
      <div className={`sidebar ${open ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <FaTimes />
        </button>

        <ul>
          <li>
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#features" onClick={() => setOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#process" onClick={() => setOpen(false)}>
              Process
            </a>
          </li>
          <li>
            <a href="#usage" onClick={() => setOpen(false)}>
              Usage
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </Styles>
  );
};

export default NavbarComponent;
