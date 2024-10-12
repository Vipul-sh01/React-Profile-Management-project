export const handleLogin = (username, profiles = [], dispatch, navigate) => {
    if (!username.trim()) {
      return "Username cannot be empty."; 
    }
    const user = profiles.find((profile) => profile.username === username);

    if (user) {
      dispatch({ type: "LOGIN_USER", payload: user });
      navigate("/profile");
      return ""; 
    } else {
      return "Invalid username.";
    }
  };
  