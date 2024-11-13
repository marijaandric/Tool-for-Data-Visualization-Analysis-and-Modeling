import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import HomeIcons from "../../../assets/icons/home.svg";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <span className="image">
            <img
              alt="Profile pic"
              src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm01MTMtZi0wMTQtZC1sMWsxa3NkZC5qcGc.jpg"
            />
          </span>

          <div className="text logo-text">
            <span className="name">Marija</span>
            <span className="profession">Developer</span>
          </div>
        </div>

        <img
          className="toggle"
          alt="Toggle"
          src="../../../assets/images/profile-photo.png"
        />
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/">
                <img alt="Home" className="icon" src={HomeIcons} />
                <span className="text nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/">
                <img
                  alt="Model history"
                  className="icon"
                  src="../../../assets/icons/home.svg"
                />
                <span className="text nav-text">Model history</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/">
                <img
                  alt="Data history"
                  className="icon"
                  src="../../../../../assets/icons/data.svg"
                />
                <span className="text nav-text">Data history</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/">
                <img
                  alt="Shared dataset"
                  className="icon"
                  src="../../../../../assets/icons/fileChart.svg"
                />
                <span className="text nav-text">Shared Datasets</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/">
                <img
                  alt="Shared models"
                  className="icon"
                  src="../../../../../assets/icons/data.svg"
                />
                <span className="text nav-text">Shared Models</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/">
                <i className="pi pi-address-book"></i>
                <span className="text nav-text">Community</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/">
                <i className="pi pi-question"></i>
                <span className="text nav-text">Q&A</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <Link to="/">
              <img
                className="icon"
                src="../../../../../assets/icons/logout.svg"
                alt=""
              />
              <span className="text nav-text">Logout</span>
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
