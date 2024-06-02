import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import VerticalNavbar from "./components/VerticalNavbar";

function App() {
  const location = useLocation();
  const isUploadsPage = location?.pathname === "/uploads";
  const isSettingsPage = location?.pathname === "/settings";

  return (
    <React.Fragment>
      {isUploadsPage || isSettingsPage ? (
        <div className="verticalNavbarFlow">
          <VerticalNavbar />
          <Outlet />
        </div>
      ) : (
        <React.Fragment>
          <Navbar />
          <Outlet />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
