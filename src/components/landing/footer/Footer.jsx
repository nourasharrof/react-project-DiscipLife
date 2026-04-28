import React from "react";
import { Styles } from "./styles";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Styles>
      <footer id="contact">
        <div className="footer-columns">
          <div className="column-element">
            <h3>About DiscipeLife</h3>
            <span className="line"></span>
            <p>
              Smart organizing for tasks and expenses.Simplicity,accuracy, and
              sustainability in managing your dat.
            </p>
            <span>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  fontSize: "30px",
                  color: "#4267b2",
                  fontWeight: "1000",
                }}
              >
                <FaFacebookF title="Facebook" style={{ cursor: "pointer" }} />
                <FaWhatsapp
                  title="WhatsApp"
                  style={{ cursor: "pointer", color: "#25D366" }}
                />
                <FaInstagram
                  title="Instagram"
                  style={{ cursor: "pointer", color: "#C13584" }}
                />
              </div>
            </span>
          </div>
          <div className="column-element">
            <h3>Quick Links</h3>
            <span className="line"></span>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                {" "}
                <a href="#features">Features</a>
              </li>
              <li>
                {" "}
                <a href="#process">process</a>
              </li>
              <li>
                <a href="#usage">Usage</a>
              </li>
              <li>
                {" "}
                <a href="#opinion">Opinion</a>
              </li>
              <li>
                {" "}
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="column-element">
            <h3>Contact Us</h3>
            <span className="line"></span>
          </div>
        </div>
        <p className="end">2025 DiscipeLife.All rights reserved.</p>
      </footer>
    </Styles>
  );
};

export default Footer;
