import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/general/Sidebar/Sidebar.tsx";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="app-layout">
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
