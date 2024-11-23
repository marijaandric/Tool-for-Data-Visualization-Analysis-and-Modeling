import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import homeIcon from "../../../assets/icons/home.svg";
import modelIcon from "../../../assets/icons/models.svg";
import dataIcon from "../../../assets/icons/data.svg";
import logoutIcon from "../../../assets/icons/logout.svg";
import arrowLeftIcon from "../../../assets/icons/arrowLeft.svg";

import logo from "../../../assets/images/logo-first-part.png";
import logoSecondPart from "../../../assets/images/logo-second-part.png";

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
            <img alt="Logo" src={logo} />
          </span>

          {!isCollapsed && (
            <div>
              <img
                alt="Logo"
                className="logo-second-part"
                src={logoSecondPart}
              />
            </div>
          )}
        </div>

        <img
          className="toggle"
          alt="Toggle"
          src={arrowLeftIcon}
          onClick={toggleSidebar}
        />
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/" className="link">
                <img alt="Home" className="icon" src={homeIcon} />
                {!isCollapsed && <span className="text nav-text">Home</span>}
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/" className="link">
                <img alt="Models" className="icon" src={modelIcon} />
                {!isCollapsed && (
                  <span className="text nav-text">Model history</span>
                )}
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/" className="link">
                <img alt="Data" className="icon" src={dataIcon} />
                {!isCollapsed && (
                  <span className="text nav-text">Data history</span>
                )}
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <Link to="/" className="link">
              <img className="icon" src={logoutIcon} alt="" />
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
