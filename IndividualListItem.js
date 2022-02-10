import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Context } from "../context/Context";

function IndividualListItems({ item }) {
  const { setActive } = useContext(Context);
  const Clicked = (id) => {
    setActive(id);
    console.log(id);
  };

  return (
    <li style={{ listStyleType: "none" }}>
      <a to="">
        <FontAwesomeIcon
          onClick={() => Clicked(item.id)}
          className="icon"
          icon={item.icons}
        />

        <span onClick={() => Clicked(item.id)}>{item.title}</span>
      </a>
      <p>{item.span}</p>
    </li>
  );
}

export default IndividualListItems;
