import React from "react";
import "../../assets/css/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section">
          <div className="footer-container">
            <div className="footer-div">
              <p><Link to="/contactus" style={{ color: "inherit", textDecoration: "none" }}>Help</Link></p>
            </div>
            <div className="footer-div">
              <p>Privacy Policy</p>
            </div>
            <div className="footer-div">
              <p>Terms and Conditions</p>
            </div>
          </div>

          <div id="footer">
            <p>Spotlight &#169; 2024, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
