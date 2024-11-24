import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginAndRegister.css";

const LoginAndRegister = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleRightPanel = () => {
    setIsRightPanelActive(true);
  };

  const handleLeftPanel = () => {
    setIsRightPanelActive(false);
  };

  return (
    <>
      <div
        className={`containerLoginAndRegister ${
          isRightPanelActive ? "right-panel-active" : ""
        } `}
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign-In Form */}
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/">Forgot your password?</Link>
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay Container */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={handleLeftPanel}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" onClick={handleRightPanel}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAndRegister;
