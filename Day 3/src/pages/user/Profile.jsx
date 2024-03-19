import React from "react";
import "../../assets/css/Profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div>
        
    <div className="profile-container">
      <h2> Profile</h2>
      <div className="profile-details">
        <div className="detail">
          <label>Name:</label>
          <span>John Doe</span>
        </div>
        <div className="detail">
          <label>Email:</label>
          <span>johndoe@example.com</span>
        </div>
        <div className="detail">
          <label>Phone Number:</label>
          <span>123-456-7890</span>
        </div>
        <div className="detail">
          <label>Role:</label>
          <span>Administrator</span>
        </div>
        <div className="detail">
          <label> <Link to="/user/dashboard" style={{color:"imherit",textDecoration:"none"}}>My Bookings</Link></label>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;

