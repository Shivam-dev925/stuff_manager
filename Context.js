import React, { useEffect, createContext, useState } from "react";

import Swal from "sweetalert";

import { Database } from "../components/Firebase";
export const Context = createContext();

function GlobalContext({ children }) {
  const [commentList, setCommentList] = useState([]);
  const [value, setValue] = useState("");
  const [listItems, setListItems] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState(1);
  const showInput = () => {
    setClicked(!clicked);
  };
  const ListOfItems = () => {
    if (value) {
      Database.collection("AddedItems").add({
        Task: value,
        time:new Date().toLocaleTimeString()
      });
    }
    setValue("");
  };

  useEffect(() => {
    Database.collection("AddedItems").onSnapshot((snapshot) => {
      setListItems(
        snapshot.docs.map((doc) => ({
          Task: doc.data().Task,
          id: doc.id,
          time:doc.data().time
        }))
      );
    });
  }, [value]);

  const Delete = (index, Task) => {
    console.log("delete", index, Task);
    Database.collection("AddedItems").doc(index).delete();
    Swal({
      text: `you have completed your  ${Task} task`,
      icon: "success",
      buttonText: "ok",
    });
  };

  return (
    <Context.Provider
      value={{
        listItems,
        setListItems,
        value,
        setValue,
        showInput,
        clicked,
        setClicked,
        active,
        setActive,
        Delete,
        ListOfItems,
        commentList,
        setCommentList,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default GlobalContext;
