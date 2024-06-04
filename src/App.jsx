import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === null) {
      if (dialogRef.current) dialogRef.current.showModal();
    }
  }, []);

  const handleEmailSubmit = async () => {
    setIsLoggingIn(true);
    try {
      const response = await fetch(
        "https://skailama-assignment-backend.onrender.com/api/check-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      console.log(data);
      console.log(data?.user?.projects?.length > 0);
      localStorage.setItem("email", email);
      localStorage.setItem("user", data.userId);
      alert("successfully logged in");
      if (data?.user?.projects?.length > 0) {
        navigate("/projects", { state: { projects: data.user.projects } });
      } else {
        navigate("/");
      }
    } catch (error) {
      setLoginError("Error:", error);
    }
    setIsLoggingIn(false);
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
              disabled={isLoggingIn}
            >
              Login
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
