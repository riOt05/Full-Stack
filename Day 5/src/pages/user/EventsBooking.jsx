import "../../assets/css/EventsBooking.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

function EventsBooking() {
    const[username, setUserName]=useState("");
    const[submissiondate, setSubmissionDate]=useState("");
    const[eventdate, setEventDate]=useState("");
    const[description, setDescription]=useState("");
    const[headcount, setHeadCount]=useState("");

    const navigate=useNavigate();

    async function EventsBooking(event){
        event.preventDefault();
    }

    
  
    const handleevent = () => {
      Swal.fire({
        title: "Event Booked",
        icon: "success",
      }).then(() => {
        navigate("/user/dashboard");
      });
    };
  return (
    <div className="eventsbooking">
        <div>
         
       <form onSubmit={EventsBooking}>
        <h2 style={{textAlign:"center",fontSize:"40px",color:"white"}}>Book your Event</h2>
        <div className="event-form">
        <label for="text">UserName</label>
        <input className="event-tags"
              
              type="text"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
        ></input>

        <label for="text">Submission Date</label>
        <input className="event-tags"
              
              type="date"
              onChange={(event) => {
                setSubmissionDate(event.target.value);
              }}
        ></input>

        <label for="date">Event Date</label>
        <input className="event-tags"
              
              type="date"
              onChange={(event) => {
                setEventDate(event.target.value);
              }}
        ></input>

        <label for="text">Description</label>
        <input className="event-tags"
              style={{height:"40px"}}
              type="text"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
        ></input>

        <label for="number">Head Count</label>
        <input className="event-tags"
              
              type="number"
              onChange={(event) => {
                setHeadCount(event.target.value);
              }}
        ></input>
  <button className="explore-button" onClick={handleevent} style={{color:"inherit",textDecoration:"none"}}> <Link to="/user/dashboard">Confirm</Link></button>
        


        </div>
       </form>
          
       </div>
    </div>
  )
}

export default EventsBooking