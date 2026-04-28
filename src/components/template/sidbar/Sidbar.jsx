import { BiTask } from "react-icons/bi";
import { FaBeer, FaList, FaTasks, FaWallet } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";
import { Styles } from "./styleSidbar.js";
import {
  MdCategory,
  MdChecklist,
  MdDashboard,
  MdInsertChart,
} from "react-icons/md";
import Menulist from "./menulist/Menulist.jsx";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Sidbar = () => {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Styles>
      <div className="sidebar-container">
        <div className="sidebar-toggle" onClick={toggle}>
          {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </div>
        <div className={isOpen ? "sidebar open" : "sidebar"}>
          <div className="sidebar--logo">
            {/* <MdChecklist className="logo-icon" /> */}
            <span>D</span>iscip<span>L</span>ife
          </div>
          <Menulist />
        </div>
      </div>
    </Styles>
  );
};

export default Sidbar;
