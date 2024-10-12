import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../controllers/ProfileContext.jsx";
import { handleLogin } from "../controllers/LoginController.jsx"; 
import '../styles/App.css'; 

const Login = () => {
  const { state, dispatch } = useContext(ProfileContext);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    const errorMessage = handleLogin(username, state.profiles, dispatch, navigate);
    if (errorMessage) {
      setError(errorMessage);
    }
  };

  return (
    <div className="container"> 
      <h2>Login</h2>
      {error && <p className="error">{error}</p>} 
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Login;
