
import "../../assets/css/ForgotPassword.css";


import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    
  }
  return (
    <>
    <div className="login-body">
      
      <div class="loginhead">
        <form onSubmit={login}>
          <h2>Confirm Ur Password</h2>
          <div class="inputs">
            <label for="email">Username</label>
            <input
              class="inputbox"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
            <label for="password">Password</label>
            <input
              class="inputbox"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
            <label for="password">New Password</label>
            <input
              class="inputbox"
              type="password"
              onChange={(event) => {
                setNewPassword(event.target.value);
              }}
            ></input>
          </div>
          <button type="submit" style={{color: "inherit",textDecoration:"none",marginLeft:"-1px"}}><Link to="/login" style={{color: "inherit",textDecoration:"none"}}>Submit</Link></button>
         
          
         
        </form>
      </div>
      </div>
    </>
  );
}
export default ForgotPassword;
