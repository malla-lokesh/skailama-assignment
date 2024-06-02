import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <React.Fragment>
      {location?.pathname === "/uplaods" ? null : <Navbar />}
      <Outlet />
    </React.Fragment>
  );
}

export default App;
