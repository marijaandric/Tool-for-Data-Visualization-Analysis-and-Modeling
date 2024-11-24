import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/general/Sidebar/Sidebar.tsx";
import "./Layout.css";
import Navbar from "../../components/general/Navbar/Navbar.tsx";

const Layout = () => {
  return (
    <div className="app-layout">
      <div className="sidebar-layout">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <div className="main-content">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
