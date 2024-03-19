import { Link } from "react-router-dom";
import { useState } from "react";
import "../../assets/css/Register.css";
const Register = () => {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [role, setRole] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="reg_container">
      <div class="signhead">
        <form onSubmit={handleSubmit}>
          <h2>Register to your Account</h2>
          <div>
            <label for="text">Username</label>
            <input
              class="inputboxx"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
            <label for="text">Email</label>
            <input
              class="inputboxx"
              type="email"
              onChange={(event) => {
                setEmailid(event.target.value);
              }}
            ></input>
            <label for="text">password</label>
            <input
              class="inputboxx"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
            <label for="text">Confirm password</label>
            <input
              class="inputboxx"
              type="password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            ></input>
            <label for="text">Mobile Number</label>
            <input
              class="inputboxx"
              type="text"
              onChange={(event) => {
                setMobileNumber(event.target.value);
              }}
            ></input>
            <label for="text">Role</label>
            <input
              class="inputboxx"
              type="text"
              onChange={(event) => {
                setRole(event.target.value);
              }}
            ></input>
          </div>
          <button type="submit">
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Register
            </Link>
          </button>
          {/* <p>Already registered ? <Link to="/login" style={{color: "inherit",textDecoration:"none"}}>Login</Link></p> */}
        </form>
      </div>
    </div>
  );
};
export default Register;
