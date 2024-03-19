import "../../assets/css/Login.css";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="login-body">
        <div class="loginhead">
          <form onSubmit={login}>
            <h2>Log In to Your Account</h2>
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
            </div>
            <button
              type="submit"
              style={{
                color: "inherit",
                textDecoration: "none",
                marginLeft: "-1px",
              }}
            >
              <Link
                to="/user/home"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Log in
              </Link>
            </button>
            <p style={{ textAlign: "left", marginTop: "3px" }}>
              <Link
                to="/forgot-Password"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Forgot Password
              </Link>{" "}
            </p>
            <p style={{ textAlign: "center" }}>
              New User ?
              <Link
                to="/register"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {" "}
                Register
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
