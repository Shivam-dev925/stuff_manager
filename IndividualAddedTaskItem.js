import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../context/Context";
const IndividualTaskCompo = ({ item }) => {
  const { Delete } = useContext(Context);
  return (
    <li>
      key={item.id}
      {item.Task}
      <FontAwesomeIcon
        onClick={() => Delete(item.id, item.Task)}
        className="trashicon"
        icon={faTrash}
      />
      <p style={{ marginTop: "20px" }}>
        <strong>CREATED AT:</strong> {item.time}
      </p>
    </li>
  );
};

export default IndividualTaskCompo;
