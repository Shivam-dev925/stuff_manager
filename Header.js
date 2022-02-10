import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { UseAuth } from "../context/AuthContext";
function HeaderCompo() {
  const { user } = UseAuth();
  return (
    <>
      <header
        style={{
          height: "55px",
          backgroundColor: "#E6E4E4",
          position: "sticky",
        }}
        className="d-flex flex-row justify-content-between align-items-center  "
      >
        <div className="left_portion">
          <h3 className="web_name">&#8249;&#47;Stuff_manager&#8250;</h3>
        </div>

        <div className="right_portion">
          {!user ? (
            <Link className="text-decoration-none text-black" to="/signin">
              &#8249;&#47; Signin&#8250;
            </Link>
          ) : null}

          <FontAwesomeIcon
            style={{ fontSize: "20xp", marginLeft: "10px" }}
            icon={faBell}
          />

          <div
            style={{
              width: "65px",
              height: "35px",
              background: "transparent",
              border: "none",
              marginLeft: "20px",
              borderRadius: "50%",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              className="icon"
              style={{ marginTop: "7px" }}
              icon={faUser}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderCompo;
