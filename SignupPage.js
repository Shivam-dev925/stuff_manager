import React, { useState } from "react";
import BodyFlex from "../styles/BodyFlex";
import { UseAuth } from "../context/AuthContext";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { SignUp } = UseAuth();
const navigate=useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await SignUp(email, password);
      navigate('/SigninPage')
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
   
      <BodyFlex>
        <div className="login_wrapper">
          <div className="login_left">
            <div style={{ width: "78%" }}>
              <h1 className="login_title">
                start Turning your Ideas into your journey
              </h1>

              <p className=" lead" style={{ marginTop: "40px" }}>
                create a free account and access all the features for 30-days.{" "}
                <br /> no-cedit card needed.Trusted by over 4,000 professionals.
              </p>
            </div>
          </div>
          <div className="login_right">
            <h1>Sign UP</h1>
            <p style={{ opacity: "0.6" }}>start your 30-days free trial.</p>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={HandleSubmit}>
              <div>
                <label htmlFor="Email" className="input-label">
                  email.
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name="email"
                  type="email"
                  id="Email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="input-label">
                  password.
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
                <p style={{ marginTop: "10px" }}>
                  must be at-least 8 charachters
                </p>
              </div>
              <button
                type="submit"
                className="btn btn-sm w-75 btn-outline-success"
              >
                sign Up
              </button>

            </form>
          </div>
        </div>
      </BodyFlex>
    </>
  );
}

export default SignupPage;
