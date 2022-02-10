import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert";
import { Database } from "../components/Firebase";
function IndividualCommentCompo({ item }) {
  const Delete = (id, comment) => {
    Database.collection("AddedCmtItms").doc(id).delete();

    Swal({
      text: `your comment ${comment} is deleted`,
      icon: "success",
      buttonText: "ok",
    });
  };

  return (
    <li
      key={item.id}
      style={{
        listStyleType: "none",
        borderBottom: "1px solid grey",
      }}
    >
      <div className="d-flex flex-row ">
        <div className="avatar">
          <img
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
            alt=""
            src="images/dan.png"
          />
        </div>
        <div className=" mx-5">
          <h5 className="avatarName">michel</h5>
        </div>
        <FontAwesomeIcon
          className="trash"
          onClick={() => Delete(item.id, item.comment)}
          icon={faTrash}
        />
      </div>
      <p style={{ marginLeft: "40px", marginTop: "20px" }}>
        
        <strong>CREATED AT:</strong> {item.time}
      </p>

      <p style={{ marginTop: "30px", marginLeft: "40px" }}>{item.comment}</p>
    </li>
  );
}

export default IndividualCommentCompo;
