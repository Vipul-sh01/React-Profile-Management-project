import React, { useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../controllers/ProfileContext.jsx";
import "../styles/App.css";

const Login = () => {
  const { state, dispatch } = useContext(ProfileContext);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleInputChange = useCallback((e) => setUsername(e.target.value), []);

  const handleLogin = useCallback(() => {
    if (!username.trim()) {
      setError("Username cannot be empty.");
      return;
    }

    const user = state.profiles.find(
      (profile) => profile.username === username
    );

    if (user) {
      dispatch({ type: "LOGIN_USER", payload: user });
      navigate("/profile");
    } else {
      setError("Invalid username.");
    }
  }, [username, state.profiles, dispatch, navigate]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error" role="alert">{error}</p>}
      <input
        type="text"
        className="input"
        placeholder="Enter your username"
        value={username}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        aria-label="Username"
        autoFocus
      />
      <button 
        onClick={handleLogin} 
        disabled={!username.trim()}
        className="login-button"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
