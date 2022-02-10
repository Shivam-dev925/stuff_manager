import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faTasks, faComment } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../context/Context";
import { UseAuth } from "../context/AuthContext";

const Circle = styled.div`
  width: 130px;
  height: 130px;
  border: none;
  text-align: center;
  align-items: center;
  display: flex;
  font-size: 40px;
  font-weight: 600;
  justify-content: center;
  border-radius: 50%;
  background: ${({ bgColor }) => bgColor};
  box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in;
  &:hover {
    background: #060606;
    color: #fff;
    box-shadow: 4px 5px 10px rgba(0, #fff, 0, 0.6);
    transform: scale(0.95);
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
`;
function Main4Compo() {
  const { listItems, commentList } = useContext(Context);
  const { user } = UseAuth();
  return (
    <>
      <div className="main justify-content-center align-items-center">
        <h3
          style={{
            position: "absolute",
            fontWeight: "600",
            top: "30px",
            left: "100px",
          }}
        >
          DASHBOARD
        </h3>
        <h1
          className="display-3 text-center"
          style={{
            position: "absolute",
            fontWeight: "600",
            top: "100px",
            left: "400px",
          }}
        >
          hello <br />
          {user.displayName}
        </h1>
        <div className="data  ">
          <div>
            <FontAwesomeIcon
              style={{
                marginLeft: "50px",
                marginBottom: "20px",
                fontSize: "30px",
              }}
              icon={faTasks}
            />
            <p>total Tasks pending</p>
            <Circle bgColor="#dddddddd">{listItems.length}</Circle>
          </div>
          <div>
            <FontAwesomeIcon
              style={{
                marginLeft: "50px",
                marginBottom: "20px",
                fontSize: "30px",
              }}
              icon={faComment}
            />
            <p>total comments pending</p>
            <Circle bgColor="#dddddddd">{commentList.length}</Circle>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main4Compo;
