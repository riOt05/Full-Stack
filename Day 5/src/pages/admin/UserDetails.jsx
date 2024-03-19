import React from "react";
import "../../assets/css/UserDetails.css";
import { Link } from "react-router-dom";

const UserDetails = ({ name, email, phoneNumber, role }) => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        <div className="detail">
          <label>Name:</label>
          <span>{name}</span>
        </div>
        <div className="detail">
          <label>Email:</label>
          <span>{email}</span>
        </div>
        <div className="detail">
          <label>Phone Number:</label>
          <span>{phoneNumber}</span>
        </div>
        <div className="detail">
          <label>Role:</label>
          <span>{role}</span>
        </div>
        <div className="detail">
          <label>
            <Link
              to="/user/dashboard"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              My Bookings
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
