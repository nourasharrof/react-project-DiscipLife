import { PiFlowerLight } from "react-icons/pi";
import { Styles } from "./styleHeader";
import { IoNotifications, IoSearch } from "react-icons/io5";
import { useAuth } from "../../contex/AuthContext";
const Header = () => {
  const { user } = useAuth();
  return (
    <Styles>
      {/* navbar-expand-lg  container-fluid */}
      <div className="header1 ">
        <div className="head">
          <h2>
            Hello,<span>{user?.name || "Guest"}</span>
          </h2>
          <p>
            <PiFlowerLight style={{ color: "#00ff00" }} />
            .Let's finish your Tasks today.
          </p>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <IoSearch className="search-icon" />
        </div>
        <div className="user-box">
          <IoNotifications className="user--icon" />
        </div>
      </div>
    </Styles>
  );
};

export default Header;
