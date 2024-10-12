import React from "react";
// import '../styles/UserProfile.css'

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>Profile</h2>
      <ul>
        <li><strong>Name:</strong> {user.name}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Username:</strong> {user.username}</li>
        <li><strong>Phone:</strong> {user.phone}</li>
        <li><strong>Gender:</strong> {user.gender}</li>
        <li><strong>Address:</strong> {user.address}</li>
        <li><strong>Pincode:</strong> {user.pincode}</li>
        <li><strong>Country:</strong> {user.country}</li>
        <li><strong>Skills:</strong> {user.skills}</li>
      </ul>
    </div>
  );
};

export default UserProfile;
