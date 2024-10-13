import React, { useContext, useMemo } from "react";
import { ProfileContext } from "../controllers/ProfileContext.jsx";
import UserProfile from "./UserProfile.jsx";
import "../styles/App.css";

const Profile = () => {
  const { state } = useContext(ProfileContext);

  const user = useMemo(() => state.loggedInUser || null, [state.loggedInUser]);

  if (!user) {
    return (
      <div className="container">
        <p className="error" style={{ textAlign: "center", marginTop: "20px" }}>
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <UserProfile user={user} />
    </div>
  );
};

export default Profile;
