import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import MainBody from "./MainBody";
import IndividualListItems from "../Individual/IndividualListItem";

import {
  faInbox,
  faBars,
  faTasks,
  faDatabase,
  faComment,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faBuffer, faScribd } from "@fortawesome/free-brands-svg-icons";
import { UseAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SidebarCompo() {
  const [show, setShow] = useState(true);
  const { user, Logout } = UseAuth();
  const Shrink = () => {
    setShow(!show);
  };
  const Navigate = useNavigate();
  const menuitems = [
    { id: 1, icons: faInbox, title: "Inbox", span: "inbox" },
    { id: 2, icons: faBuffer, title: "offers", span: "offers" },
    { id: 3, icons: faTasks, title: "Tasks", span: "Tasks" },
    { id: 4, icons: faDatabase, title: "Dashboard", span: "Dashboard" },

    { id: 5, icons: faComment, title: "comment", span: "comment" },

    { id: 6, icons: faWrench, title: "settings", span: "settings" },
  ];

  const HandleUser = async () => {
    try {
      await Logout();
      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className={!show ? "sidebar" : "activesidebar"}>
        <div className={!show ? "logo_content" : "active"}>
          <div className="logo">
            <FontAwesomeIcon
              className="logoicon"
              style={{ fontSize: "30px" }}
              icon={faScribd}
            />
            <div className="logo_name">&#8249;&#47;menu&#8250;</div>
            <FontAwesomeIcon
              onClick={Shrink}
              className="icon menubar "
              style={{ color: "darkslateblue", fontSize: "25px" }}
              icon={faBars}
            />
          </div>
        </div>

        <div className={!show ? "nav_list" : "activenav"}>
          <ul>
            {menuitems.map((item) => {
              return (
                <IndividualListItems key={item.id} item={item} {...menuitems} />
              );
            })}
          </ul>

          <div className={!show ? "logout" : "logoutactive"}>
            {user ? (
              <svg
                onClick={HandleUser}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="right-from-bracket"
                className="svg-inline--fa fa-right-from-bracket"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"
                ></path>
              </svg>
            ) : null}
            {user ? <span>logout</span> : null}
          </div>
        </div>
      </div>
      <MainBody show={show} />
    </div>
  );
}

export default SidebarCompo;
