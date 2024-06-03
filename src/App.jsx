import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import VerticalNavbar from "./components/VerticalNavbar";
import Dialog from "./UI/Dialog";
import styles from "./styles/Homepage.module.css";

function App() {
  const location = useLocation();
  const isUploadsPage = location?.pathname === "/uploads";
  const isSettingsPage = location?.pathname === "/settings";
  const dialogRef = useRef(null);
  const isLoggedIn = localStorage.getItem("email");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const disableEmailSubmitBtn = useRef(false);

  useEffect(() => {
    if (isLoggedIn === null) {
      if (dialogRef.current) dialogRef.current.showModal();
    }
  }, []);

  const handleEmailSubmit = async () => {
    disableEmailSubmitBtn.current = true;
    try {
      const response = await fetch("http://localhost:5050/api/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      localStorage.setItem("email", email);
      if (data.exists) {
        navigate("/projects", { state: { projects: data.projects } });
      } else {
        navigate("/homepage");
      }
    } catch (error) {
      setLoginError("Error:", error);
    }
    if (dialogRef.current) dialogRef.current.close();
  };

  return (
    <React.Fragment>
      {isLoggedIn === null ? (
        <Dialog ref={dialogRef}>
          <h2>Login</h2>
          <label htmlFor="email">Enter email:</label>
          <input
            type="email"
            id="email"
            placeholder="youremail@something.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {loginError ? <p>{loginError}</p> : null}
          <div className={styles.btnGroup}>
            <button
              className={styles.createBtn}
              onClick={handleEmailSubmit}
              disabled={disableEmailSubmitBtn}
            >
              Create
            </button>
          </div>
        </Dialog>
      ) : null}
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
