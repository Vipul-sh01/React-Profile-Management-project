import React, { useContext } from "react";
import { ProfileContext } from "../controllers/ProfileContext.jsx";
import { getUserProfile } from "../controllers/ProfileController.jsx";
import UserProfile from "./UserProfile.jsx"; 
import '../styles/App.css'; 

const Profile = () => {
  const { state } = useContext(ProfileContext);
  const user = getUserProfile(state); 

  if (!user) {
    return (
      <div className="container"> 
        <p className="error" style={{ textAlign: "center" }}>
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
