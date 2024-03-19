import React from "react";
import Footer from "./Footer";

import "../../assets/css/Header.css";
import video1 from "../../assets/images/inpersonevents.mp4";
import video from "../../assets/images/conference 5.mp4";
import hybridvideo from "../../assets/images/hybridevents.mp4";
import video2 from "../../assets/images/conferencevideo.mp4";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Header = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    Swal.fire({
      title: "Do you want to logout",
      text: "If yes click the below button",
      icon: "success",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div>
      <header>
        <nav id="topbar">
          <div class="container"></div>
          <h2>SPOTLIGHT</h2>
          <ul>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>
              {" "}
              <Link
                to="/user/contactus"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Contact{" "}
              </Link>
            </h3>
            <h3>
              {" "}
              <Link
                to="/user/profile"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                profile
              </Link>
            </h3>
            <h3>
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "none" }}
                onClick={handlelogout}
              >
                Logout
              </Link>
            </h3>
          </ul>
        </nav>
      </header>
      <div className="frontpage_container">
        <main>
          <div className="h-container">
            <div className="h-text">
              <p style={{ color: "#20dbd4", fontWeight: "bold" }}>
                ALL-IN-ONE EVENT MANAGEMENT SOFTWARE
              </p>
              <br />
              <br />
              <h1 style={{ fontSize: "60px" }}>
                Built for the events of today- and tomorrow
              </h1>
              <br />
              <br />
              <p>
                Everything you need to craft impactful event experiences all
                while staying technologically relevant,now and always.
              </p>
              <br />
              <br />
              <button className="explore_button">
                <Link
                  to="/user/exploreallevents"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  {" "}
                  Explore All Events
                </Link>
              </button>
            </div>
            <div className="h-video">
              <video autoPlay loop muted playsInline src={video}></video>
            </div>
          </div>
        </main>
        <div className="events-bar" style={{ backgroundColor: "black" }}>
          <div className="events-text">
            <h1>The Simplest Way To Host all your events</h1>
          </div>
          <div className="frontpage-bottom-image">
            <div
              className="image_div"
              style={{
                backgroundImage: "linear-gradient(to right,pink,white)",
                color: "black",
              }}
            >
              <h3 style={{ fontSize: "30px" }}> In-person events</h3>
              <br />
              <p>Keep it all together at the venue</p>
              <br />
              {/* <button className="explore_button">Explore More</button> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="event-video"
                src={video1}
              ></video>
            </div>
            <div
              className="image_div"
              style={{
                backgroundImage: "linear-gradient(to top right,blue,white)",
              }}
            >
              <h3 style={{ fontSize: "30px" }}>Virtual events</h3>
              <br />
              <p>Keep it all together at the venue</p>
              <br />
              {/* <button className="explore_button">Explore More</button> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="event-video"
                src={video2}
              ></video>
            </div>
            <div
              className="image_div"
              style={{
                backgroundImage: "linear-gradient(to right,violet,white)",
              }}
            >
              <h3 style={{ fontSize: "30px" }}> Hybrid events</h3>
              <br />
              <p>Keep it all together at the venue</p>
              <br />
              {/* <button className="explore_button">Explore More</button> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="event-video"
                src={hybridvideo}
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="events-booking">
          <div className="div-3">
            <h2 className="moving-text">
              The greatest events are not our loudest <br />
              but our stillest hours
            </h2>
          </div>

          <div className="events-booking">
            <button id="events-booking-btn" className="moving-button">
              <Link
                to="/user/eventsbooking"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                book your event
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Header;
