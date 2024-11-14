import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import homeIcon from "../../../assets/icons/home.svg";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img
              alt="Profile pic"
              src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm01MTMtZi0wMTQtZC1sMWsxa3NkZC5qcGc.jpg"
            />
          </span>

          {!isCollapsed && (
            <div className="text logo-text">
              <span className="name">Marija</span>
              <span className="profession">Developer</span>
            </div>
          )}
        </div>

        <img
          className="toggle"
          alt="Toggle"
          src={homeIcon}
          onClick={toggleSidebar}
        />
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/">
                <img alt="Home" className="icon" src={homeIcon} />
                {!isCollapsed && <span className="text nav-text">Home</span>}
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/">
                <img alt="Model history" className="icon" src={homeIcon} />
                {!isCollapsed && (
                  <span className="text nav-text">Model history</span>
                )}
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/">
                <img alt="Data history" className="icon" src={homeIcon} />
                {!isCollapsed && (
                  <span className="text nav-text">Data history</span>
                )}
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/">
                <img alt="Shared dataset" className="icon" src={homeIcon} />
                {!isCollapsed && (
                  <span className="text nav-text">Shared Datasets</span>
                )}
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/">
                <img alt="Shared models" className="icon" src={homeIcon} />
                {!isCollapsed && (
                  <span className="text nav-text">Shared Models</span>
                )}
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <Link to="/">
              <img className="icon" src={homeIcon} alt="" />
              {!isCollapsed && <span className="text nav-text">Logout</span>}
            </Link>
          </li>
          <br />

          <li className="mode">
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>

            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
