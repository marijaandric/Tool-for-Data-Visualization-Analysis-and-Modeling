import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/general/Sidebar/Sidebar.tsx";
import "./Layout.css";
import Navbar from "../../components/general/Navbar/Navbar.tsx";

const Layout = () => {
  return (
    <div className="app-layout">
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
