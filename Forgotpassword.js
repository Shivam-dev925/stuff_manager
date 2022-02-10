import React, { useState } from "react";
import { UseAuth } from "../context/AuthContext";

import { Alert } from "react-bootstrap";
import BodyFlex from "../styles/BodyFlex";
function Forgotpassword() {
  const [email, setEmail] = useState("");

  const { ForgotPassword, error, setError } = UseAuth();

  const HandleSubmit = async (e) => {
     
    e.preventDefault();
    try {
      await ForgotPassword(email);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <BodyFlex>
      <div className="login_wrapper">
        <div className="login_left">
          <div style={{ width: "78%" }}>
            <h1 className="login_title">
              start Turning your Ideas into your journey
            </h1>

            <p className=" lead" style={{ marginTop: "40px" }}>
              “Well, I reckon you should --" Ron began, but he was interrupted
              by the Fat Lady, <br /> who had been watching them sleepily and
              now burst out, "Are you going to give me the password or <br />{" "}
              will I have to say awake all night waiting for you to finish your
              conversation?”
            </p>
          </div>
        </div>
        <div className="login_right">
          <h1>forgot password</h1>

          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={HandleSubmit}>
            <div style={{ marginTop: "50px" }}>
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

            <button
              type="submit"
              style={{ marginTop: "100px" }}
              className="btn btn-sm w-75 btn-outline-success"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </BodyFlex>
  );
}

export default Forgotpassword;
