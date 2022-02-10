import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { faPen, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Database } from "./Firebase";
import IndividualCommentCompo from "../Individual/IndividualCommentItem";
import { Context } from "../context/Context";

const CommentCard = styled.div`
  height: fit-content;
  min-height: 500px;
  width: 100%;
  background-color: #dddddddd;
  margin-top: 50px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

function Main5Compo() {
  const { commentList, setCommentList } = useContext(Context);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const HandleShow = () => {
    setShow(!show);
    let a = document.getElementById("comment");
    a.style.width = "500px";
    a.style.transition = "all 0.2s ease";
  };

  const handleAddList = () => {
    if (value !== "") {
      Database.collection("AddedCmtItms").add({
        comment: value,
        time:new Date().toLocaleTimeString()
      });
      setShow(false);
      setValue("");
    }
    let a = document.getElementById("comment");
    a.style.width = "200px";
    a.style.transition = "all 0.2s ease";
  };

  useEffect(() => {
    Database.collection("AddedCmtItms").onSnapshot((snapshot) => {
      setCommentList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          comment: doc.data().comment,
          time:doc.data().time
        }))
      );
    });
  }, [value]);

  return (
    <>
      <div className="main">
        <div className=" align-items-center d-flex flex-column justify-content-center container">
          <CommentCard>
            <div className="cardTitle">
              <h3>Comments({commentList.length})</h3>
            </div>

            <div className="cardItems">
              <ul style={{ marginTop: "30px" }}>
                {commentList.map((item, id) => {
                  return (
                    <IndividualCommentCompo
                      key={id}
                      {...commentList}
                      item={item}
                    />
                  );
                })}
              </ul>
            </div>

            <div id="comment" className="cardInput">
              {show ? (
                <>
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder="write comment"
                  />{" "}
                  <FontAwesomeIcon
                    onClick={handleAddList}
                    style={{
                      color: "#fff",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                    icon={faPlusCircle}
                  />
                </>
              ) : (
                <>
                  <h5 onClick={HandleShow}>Add a comment</h5>
                  <FontAwesomeIcon
                    onClick={HandleShow}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      color: "#fff",
                    }}
                    icon={faPen}
                  />
                </>
              )}
            </div>
          </CommentCard>
        </div>
      </div>
    </>
  );
}

export default Main5Compo;
