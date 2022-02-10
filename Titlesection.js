import React from "react";
import styled from "styled-components";
import Flexboxcolumn from "../styles/Flexboxcolumn";
import { Link } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";
const TitleSection = styled.section`
  background-color: #f2eeee;
  height: 180vh;
  justify-content: space-around;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  @media (max-width: 360px) {
    min-width: 350px;
    body {
      width: 100wh;
    }
  }
`;

const CreaterBox = styled.div`
  height: 500px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  user-select: none;
  border: none;
  border-radius: 50%;

  box-shadow: rgba(0, 0, 0, 0.55) 0px 5px 15px;
`;

const Square = styled.div`
  width: 800px;
  height: 200px;
  border: none;
  border-radius: 20px;
  background: #060606;
  align-items: center;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.55) 10px 10px 15px;
  user-select: none;
  &:hover {
    cursor: no-drop;
    transform: scale(1.05);
    transition: 0.8s ease;
  }

  @media (max-width: 810px) {
    width: 100%;
  }
`;

export const title2 = {
  marginTop: "0px",
  fontSize: "80px",
  opacity: "1",
};
function Titlesection() {
  const { user } = UseAuth();
  return (
    <div>
      <TitleSection>
        <div style={{ marginTop: "100p" }}>
          <h1
            style={{
              marginTop: "0px",
              fontSize: "80px",
              opacity: "1",
              background: "linear-gradient(to right, #c02425, #f0cb35)",
              webkitTextFillColor: "transparent",
              webkitBackgroundClip: "text",
            }}
          >
            Think and <br />
            organize your tasks
          </h1>
          {!user ? (
            <Link to="/signin">
              <button className="btn btn-lg px-5 py-2 mt-5  btn-outline-success rounded">
                get started
              </button>
            </Link>
          ) : (
            <Link to="/features">
              <button className="btn btn-lg px-5 py-2 mt-5  btn-outline-success rounded">
                get started
              </button>
            </Link>
          )}
        </div>

        <div className="title-box"></div>
      </TitleSection>
      <div style={{ height: "50vh" }}>
        <Flexboxcolumn style={{ color: "smokeWhite" }}>
          <h1
            style={{ fontSize: "50px", fontWeight: "900", marginTop: "100px" }}
          >
            Free up your mental space
          </h1>
          <p className="lead mt-5 ">
            Regain clarity and calmness by getting all those tasks out of your
            head and <br /> onto your to-do list (no matter where you are or
            what device you use).
          </p>
        </Flexboxcolumn>
      </div>
      <CreaterBox>
        <Circle>
          <img
            style={{ borderRadius: "50%", width: " 200px", height: "200px" }}
            src="https://avatars.githubusercontent.com/u/79845177?v=4"
            alt=""
          />
        </Circle>
        <Square>
          <h4
            style={{ fontFamily: "cursive", marginTop: "40px", color: "#fff" }}
          >
            “Perfection is achieved not when there is nothing more to add, but
            rather when there is nothing more to take away.”
          </h4>

          <footer
            style={{ float: "right", marginTop: "30px", marginRight: "20px" }}
            className="blockquote-footer"
          >
            <strong>Written by..</strong>
            <h5>shivam choudhary</h5>
          </footer>
        </Square>
      </CreaterBox>
    </div>
  );
}

export default Titlesection;
