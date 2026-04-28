import { Styles } from "./styles";

import { useState } from "react";
import AuthPage from "../../common/LoginSignup/LoginSignup";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleLogin = () => {
    setShowForm(!showForm);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <Styles>
      <section id="home">
        <div className="containAll">
          <div className="min_home_contain">
            <div className="text">
              <h1>
                control your daily<span> expenses</span> & <span>task</span>{" "}
                easily and smartly
              </h1>
              <p>
                Discover the simplicity of organization in every task, tools
                crafted with care to make managing your expenses and daily tasks
                easier than ever
              </p>

              <button className="btn" onClick={handleToggleLogin}>
                Start With Us
              </button>

              {showForm && <AuthPage onClose={handleClose} />}
            </div>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default Hero;
