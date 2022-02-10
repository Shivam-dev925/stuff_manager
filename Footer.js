import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FOOTERNAV = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 70px;
  background-color: #b9ecda;
  @media (max-width: 638px) {
    flex-direction: column;
    height: 200px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    a {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 360px) {
    min-width: 450px;
    body {
      width: 100wh;
      color: #060606;
    }
  }
`;
export const Fontstyle = {
  marginRight: "50px",
  fontSize: "25px",
  color: " #0992aa",
};

function Footer() {
  return (
    <div>
      <FOOTERNAV>
        <p style={{ color: "#0992AA", marginLeft: "20px" }}>
          copyright@EXAMPLE.com
        </p>
        <div>
          <a href="https://github.com/Shivam-dev925" target="blank">
            <FontAwesomeIcon style={Fontstyle} icon={faGithub} />
          </a>

          <a href="https://www.facebook.com/" target="blank">
            <FontAwesomeIcon style={Fontstyle} icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <FontAwesomeIcon style={Fontstyle} icon={faInstagram} />
          </a>
        </div>
      </FOOTERNAV>
    </div>
  );
}

export default Footer;
